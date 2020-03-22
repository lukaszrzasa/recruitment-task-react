import React from 'react';
import TaskManagerTemplate from '../../components/templates/TaskManager';
import {DragDropContext} from 'react-beautiful-dnd';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import {useDispatch, useSelector} from 'react-redux';
import {setList, setListOrder} from '../../store/actions';
import useGlobalUserData from '../../hooks/useUsersData';
import reorder from './helpers/reorder';
import move from './helpers/move';
import Columns from './components/Columns';


const TaskManagerPage = () => {

  const { listItems, listOrder } = useSelector(state => state);
  const { isProjectManager } = useGlobalUserData();
  const dispatch = useDispatch();

  const handleDragEnd = (event) => {
    const { source, destination, type } = event;
    //
    if(destination) {
      //
      if(type === 'TASKS') {
        //
        if (destination.droppableId === 'done') {
          const {userId} = listItems[source.droppableId][source.index];
          if (!isProjectManager(userId)){
            return; // not allowed ;)
          }
        }
        //
        const result = source.droppableId === destination.droppableId ? reorder(
          listItems[source.droppableId],
          source,
          destination,
        ) : move(
          listItems[source.droppableId],
          listItems[destination.droppableId],
          source,
          destination,
        );
        if(result){
          dispatch(setList(result));
        }
        //
      } else if(type === 'COLUMN') {
        const result = reorder(
          listOrder,
          source,
          destination,
        );
        if(result){
          dispatch(setListOrder(result['all-columns']));
        }
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TaskManagerTemplate
        header={<PageHeader/>}
        children={<Columns/>}
        footer={<PageFooter/>}
      />
    </DragDropContext>
  );
};

export default TaskManagerPage;
