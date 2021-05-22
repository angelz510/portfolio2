import React from 'react';
import budgetpls from '../../../assets/project-shots/budgetpls.png';
import '../ProjectComponent.scss';

const BudgetPls = () => {
  return (
    <div className='project'>

      <div className='project-photo'>
        <img src={budgetpls} alt='budgetpls'/>
      </div>

      <div className='project-info'>
        <p className='project-name'>Budget Pls</p>
        <p className='project-techs'>Tools: React Redux, JS, Sass, Firebase.</p>
        <p className='project-description'>Budgeting App in which users can create profile; incorporated google login and authentication. 
          <br/>Users can create, search, edit, and remove expenses. 
          <br/>Tested components using jest and styled using Sass.
        </p>
      </div>
      <hr className='project-hr'></hr>
    </div>
  );
};

export default BudgetPls;