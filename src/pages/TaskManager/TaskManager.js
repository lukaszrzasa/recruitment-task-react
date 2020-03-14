import React from 'react';
import TaskManagerTemplate from '../../components/templates/TaskManager';
import Button from '../../components/atoms/form/Button';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {useDispatch, useSelector} from 'react-redux';
import Icon from '../../components/atoms/text/Icon';
import Card from '../../components/molecules/Card';
import Flex from '../../components/atoms/Flex';
import onDragEnd from './helpers/onDragEnd';
import Task from '../../components/organisms/Task';
import { updateState } from '../../reducers/taskManagerActions';

const DraggableItem = ({item, index}) => (<Draggable
  key={item.id}
  draggableId={item.id}
  index={index}>
  {(provided) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps} >
      <Task>BODY</Task>
    </div>
  )}
</Draggable>);

const TaskList = React.memo(function TaskList({items}){
  return items.map((item, index) => (
    <DraggableItem key={index} item={item} index={index} />
  ));
});

const DroppableColumn = ({id, elem}) => {
  const { name, icon, items } = elem;
  return (<Card heading={<><Icon icon={icon} /> {name}</>}>
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}>
            <TaskList items={items} />
            {provided.placeholder}
        </div>
      )}
    </Droppable>
  </Card>);
};

const Header = () => <div>
  <Button variant="violet" color="white">sd</Button>
</div>;

const Footer = () => <div>xD</div>;

const ColumnList = React.memo(function ColumnList({columns}){
  return Object.keys(columns).map((e,i)=> <DroppableColumn key={i} id={e} elem={columns[e]} />);
});

const TaskManagerPage = () => {

  const columns = useSelector(({taskManager}) => taskManager);
  const dispatch = useDispatch();

  const handleDrop = (result) => {
    const newState = onDragEnd(result, columns);
    console.log(newState);
    if(newState) dispatch(updateState(newState));
  };


  return (
    <DragDropContext onDragEnd={handleDrop}>
      <TaskManagerTemplate header={<Header/>} footer={<Footer/>}>
        <Flex>
          <ColumnList columns={columns}/>
        </Flex>
      </TaskManagerTemplate>
    </DragDropContext>
  );
};

export default TaskManagerPage;
