// import React from 'react'
// import { shallow } from 'enzyme'
// import { expect } from 'chai'
// import sinon from 'sinon'
// import sinonChai from 'sinon-chai'
// import chai, {expect} from 'chai'
//
// import {handlerSubmit} from '../Implementation/app/rating.utils'
// import {handleChange} from '../Implementation/app/rating.utils'
//
// describe('rating', () => {
//
//   let renderedElement;
//   function renderComponent() {
//     const componentElement = React.createElement(handleChange);
//
//     renderedElement = shallow(componentElement);
//   }
//
//   before(() => {
//     chai.use(sinonChai);
//   });
//
//
//   it('should log the string "bar" when the child component is changed', () => {
//     //step 1
//     sinon.stub(console, 'log');
//
//     //step 2
//     renderComponent();
//     const childComponent = renderedElement.props().children;
//
//     //step 3
//     childComponent.props.onChange();
//
//     //step 4
//     expect(console.log).to.have.callCount(1);
//     expect(console.log).to.be.calledWith('bar');
//
//     //clean up
//     console.log.restore();
//   });
//
// });
