import React from 'react';
import Form from 'react-bootstrap/Form';
import { commonImages } from '../../common/images';

const DepartmentComponent = () => {
  return (
    <div className='department-div'>
    <div className="department-heading-div">
        <span><img src={commonImages.DepartmentIcon} alt="people-icon" /></span> <h3>Department</h3>
    </div>

    <div className='mt-4'>
        <Form.Select aria-label="Default select example" className="select-input">
            <option>Select Department</option>
            <option value="1">Basamh Trading Company</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </div>
    <div className='department-names-main-div'>
        <div className='department-names-div'>
            <a href='#'>Accounting & Internal Control</a>
            <a href='#'>Merchandizing</a>
            <a href='#'>Supply Chain</a>
        </div>
        <div className='department-names-div'>
            <a href='#'>Financial Planning & Analysis</a>
            <a href='#'>Retail Business</a>
            <a href='#'>Trade Marketing</a>
        </div>
    </div>
</div>
  )
}

export default DepartmentComponent