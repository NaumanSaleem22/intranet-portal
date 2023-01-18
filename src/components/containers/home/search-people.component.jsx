import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { commonImages } from '../../common/images';


const SearchPeopleComponent = () => {
  return (
    <div className='people-search-div'>
        <div className="people-heading-div">
            <span><img src={commonImages.PeopleIcon} alt="people-icon" /></span> <h3>People Search</h3>
        </div>
        <div>
            <InputGroup className="mb-3 mt-2">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="search-input"
                />
                <InputGroup.Text id="basic-addon2" className="input-search-div">
                    <img src={commonImages.SearchIcon} />
                </InputGroup.Text>
            </InputGroup>
        </div>
        <div>
            <Form.Select aria-label="Default select example" className="select-input">
                <option>Basamh Trading Company</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </div>
    </div>
  )
}

export default SearchPeopleComponent