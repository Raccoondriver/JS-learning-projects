import React from 'react';
import ItemList from './itemList';
import {mount} from 'enzyme';
import gotService from '../../services/gotService';

describe('Testing <Itemlist/>', () => {
    const service = new gotService();
    const list = mount(<ItemList
                                 getData={service.getAllHouses}
                                 renderItem={({name}) => name}/>)

    it('Click on item list must rerender all list in 1 instance' , () => {
        list.setState({itemList: [{name:'wqw', id: 1}, {name: 'wqw', id:2}]});
        list.simulate('click');
       
    });
});