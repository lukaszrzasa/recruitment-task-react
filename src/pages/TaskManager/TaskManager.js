import React from 'react';
import TaskManagerTemplate from '../../components/templates/TaskManager';
import Button from '../../components/atoms/form/Button';

const WelcomePage = () => {
  const Header = () => <div>
    <Button variant="violet">sd</Button>
  </div>;
  const Footer = () => <div>xD</div>;
  return (
    <div>
      <TaskManagerTemplate header={<Header/>} footer={<Footer/>}>
        <>
          ssfsd
          fsfsfdsfdsfsdfsdf
        </>
      </TaskManagerTemplate>
    </div>
  );
};

export default WelcomePage;