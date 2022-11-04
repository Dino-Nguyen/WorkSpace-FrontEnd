import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/SideBar/SideBar';
import clsx from 'clsx';
import classes from './TaskDetail.module.scss';
import { useParams } from 'react-router-dom';
import { Container, Draggable } from 'react-smooth-dnd';
import boardApi from '../../store/actions/api/board';
import listApi from '../../store/actions/api/list';
import cardApi from '../../store/actions/api/card';
import mapOrder from '../../utils/map-order';
import isEmptyObj from '../../utils/is-empty-obj';
import applyDrag from '../../utils/drag-n-drop';
import compareArrays from '../../utils/compare-arrays';
import List from '../../components/List/List';
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap';
import AddListForm from '../../components/AddListForm/AddListForm';
import { toast } from 'react-toastify';

export default function TaskDetail({ sideBarVisibility, onSideBarShow }) {
  const { id } = useParams();
  const [board, setBoard] = useState({});
  const [lists, setLists] = useState([]);

  useEffect(() => {
    boardApi.fetchBoardDetail(id).then((data) => {
      console.log(data.message);
      setBoard(data.board);
    });
  }, [id]);

  useEffect(() => {
    if (!isEmptyObj(board)) {
      setLists(mapOrder(board.lists, board.listsOrder, '_id'));
    }
  }, [board]);

  const onColumnDrop = (dropResult) => {
    const reOrderedLists = applyDrag([...lists], dropResult);
    let prevListsOrder = board.listsOrder;
    setLists(reOrderedLists);
    const newListsOrder = [];
    reOrderedLists.forEach((list) => {
      newListsOrder.push(list._id);
    });
    setBoard((prev) => {
      const newBoard = { ...prev };
      newBoard.listsOrder = newListsOrder;
      return newBoard;
    });
    if (!compareArrays(prevListsOrder, newListsOrder)) {
      const payload = { listsOrder: newListsOrder };
      boardApi.updateListsOrder(id, payload).then((data) => {
        console.log(data.message);
      });
    }
  };

  const onCardDrop = (listId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let reOrderedLists = [...lists];
      let currentList = reOrderedLists.find((list) => list._id === listId);
      currentList.cards = applyDrag(currentList.cards, dropResult);
      currentList.cardsOrder = currentList.cards.map((card) => card._id);
      setLists(reOrderedLists);
      if (dropResult.removedIndex !== null && dropResult.addedIndex !== null) {
        const payload = { cardsOrder: currentList.cardsOrder };
        listApi
          .updateList(listId, payload)
          .then((data) => {
            console.log(data.message);
          })
          .catch(() => {
            toast.error('Something went wrong. Please try again.', {
              theme: 'colored',
            });
          });
      } else {
        let payload = { cardsOrder: currentList.cardsOrder };
        listApi
          .updateList(listId, payload)
          .then((data) => {
            console.log(data.message);
          })
          .catch(() => {
            toast.error('Something went wrong. Please try again.', {
              theme: 'colored',
            });
          });

        if (dropResult.addedIndex !== null) {
          const currentCard = JSON.parse(JSON.stringify(dropResult.payload));
          const cardId = currentCard._id;
          const newListId = currentList._id;
          payload = { listId: newListId };
          cardApi.updateCard(cardId, payload).then((data) => {
            console.log(data.message);
          });
        }
      }
    }
  };

  const taskDetailContainerClassName = clsx(classes['task-detail-container'], {
    [classes['show-side-bar']]: sideBarVisibility,
  });

  return (
    <React.Fragment>
      <NavBar
        sideBarVisibility={sideBarVisibility}
        onSideBarShow={onSideBarShow}
      />
      <Sidebar
        sideBarVisibility={sideBarVisibility}
        onSideBarShow={onSideBarShow}
      />
      <section className={taskDetailContainerClassName}>
        <h1>{board.title}</h1>
        <div className={classes['board-list--container']}>
          <Container
            orientation="horizontal"
            onDrop={onColumnDrop}
            dragHandleSelector=".column-drag-handle"
            getChildPayload={(index) => lists[index]}
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: classes['list-drop-preview'],
            }}>
            {lists &&
              lists.map((list) => (
                <Draggable key={list._id}>
                  <List
                    list={list}
                    listId={list._id}
                    onCardDrop={onCardDrop}
                    setLists={setLists}
                    setBoard={setBoard}
                  />
                </Draggable>
              ))}
          </Container>
          <BootstrapContainer>
            <Row>
              <Col>
                <AddListForm
                  lists={lists}
                  setLists={setLists}
                  setBoard={setBoard}
                />
              </Col>
            </Row>
          </BootstrapContainer>
        </div>
      </section>
    </React.Fragment>
  );
}
