import { render, screen } from '@testing-library/react';
// import App from './App';
import About from './About';
import Footer from './Footer';
import HowItWorks from './howItWorks';
import Home from './home';
import React from 'react';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Start from './getstarted'
configure({adapter: new Adapter()});

describe("testing", () =>{
  //  Test #1
  test('render the About Us title', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('h1').text()).toContain("About Us");
  // const{getByText} =  render(<App />);
  //   const linkElement = getByText('Welcome to the matchmaking application');
  //   expect(linkElement).toBeInTheDocument();
  });

  // Test #2 
  test("render text in mission", ()=>{
    const wrapper = shallow(<About/>);
    expect(wrapper.find('.mission-text p').text()).toContain("Playing games allows an escape from reality into another reality. ");
  });

// Test #3
test("render the team member section title", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.teamTitle h2').text()).toContain("MEET THE TEAM MEMBERS");
});
      
// Test #4
  test("render homepage text", ()=>{
  const wrapper = shallow(< Home/>);
  expect(wrapper.find('.Line1 h1').text()).toContain("The Ultimate Destination");
  });

// Test #5
  test("render footer text - Home", ()=>{
    const wrapper = shallow(<Footer/>)  
      expect(wrapper.find('.FooterHome h5').text()).toContain("Home");
  });

  // Test 6
  test("render footer text - About Us", ()=>{
    const wrapper = shallow(<Footer/>)
    expect(wrapper.find('.FooterAU h5').text()).toContain("About Us");
    });

// Test #7
test("render footer text - How It Works", ()=>{
  const wrapper = shallow(<Footer/>)
  expect(wrapper.find('.FooterHIW h5').text()).toContain("How it works");
    });

/* Test 8
test("render 'Get Started' button", () => {
  const wrapper = shallow(<Home/>);
   expect(wrapper.find("#getstarted").text()).toBe("Get Started");
 });*/
// Test #9
test("render 'Our Story' title", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.OS_Title h2').text()).toContain("OUR STORY");
});
// Test #10
// test("render 'Our Story' text", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.Our-Story p').text()).toContain("The Let'sGame team is comprised of four unique individuals with a common goal:");
// });
// Test #11
test("render 'How It Works' title", () => {
  const wrapper = shallow(<HowItWorks/>);
  expect(wrapper.find('h1').text()).toContain("How It Works");
});
// Test #12
// test("render 'How It Works' content", () => {
//   const wrapper = shallow(<HowItWorks/>);
//   expect(wrapper.find('h2').text()).toContain("***CONTENT***");
// });
// Test #13
test("render team member - Gopi", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.GopiName h3').text()).toContain("Gopi Macha");
});
// Test #14
test("render team member - Krupa", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.SaiName h3').text()).toContain("Sai Krupa Bariki Vidura");
});
// Test #15
test("render team member - Leul", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.LeulName h3').text()).toContain("Leul Endashaw");
});
// Test 16
test("render team member - Terry", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.TerryName h3').text()).toContain("Terry Boyett");
});
// Test 17 
// test("render how it works description", () => {
//   const wrapper = shallow(<HowItWorks/>);
//   expect(wrapper.find('.HIWDescription h3').text()).toContain("This is How It Works page");
// });
// Test 18
test("render Terry Description", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.TerryName h5').text()).toContain("Development Team");
});
// Test 19
test("render Line2 of home", () => {
  const wrapper = shallow(<Home/>);
  expect(wrapper.find('.Line2 h1').text()).toContain("For Call of Duty Players Match Making");
});
// Test 20
test("render Leul Description", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.LeulName h5').text()).toContain("Product Owner");
});
// Test 21
test("render Gopi Description", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.GopiName h5').text()).toContain("Scrum Master");
});
// Test 22
test("render Krupa Description", () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('.SaiName h5').text()).toContain("Development Team");
});

  })
  describe("Api testing", () =>{
    test('Test get started click event', () => {
      const mockCallBack = jest.fn();
    
      const button = shallow((<getStartedButton onClick ={mockCallBack}>Good</getStartedButton>));
      button.find('getStartedButton').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    // Test 27
    test('Test show more click event', () => {
      const mockCallBack = jest.fn();
      const button = shallow((<show-more-button onClick ={mockCallBack}>Good</show-more-button>));
      button.find('show-more-button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    // Test 28
    test('Test game name click event', () => {
      const mockCallBack = jest.fn();
      const button = shallow((<game-name-button onClick ={mockCallBack}>Good</game-name-button>));
      button.find('game-name-button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    // Test 29
    test("render 'Show More' button text", () => {
       const wrapper = shallow(<div><button className='btn show-more-button'>OK</button></div>);
     const button = wrapper.find('.show-more-button'); 
     expect(button.text()).toEqual('OK');
      });
    // Test 30
    test("render Game button text", () => {
    
       const wrapper = shallow(<div><button className='btn game-name-button'>OK</button></div>);
     const button = wrapper.find('.game-name-button'); 
     expect(button.text()).toEqual('OK');
      });
      test('Header first', () => {
        const wrapper = shallow(<Start/>)
      
     
        expect(wrapper.find('.Name').prop('header')).toEqual('Name');
       
      
   
      });
      test('Header second', () => {
        const wrapper = shallow(<Start/>)
     expect(wrapper.find('.Rank').prop('header')).toEqual('Rank');
       });
       test('Header third', () => {
        const wrapper = shallow(<Start/>)
     expect(wrapper.find('.level').prop('header')).toEqual('Level');
       });
       test('Header fourth', () => {
        const wrapper = shallow(<Start/>)
     expect(wrapper.find('.timePlayed').prop('header')).toEqual('Time-Played');
       });
       test('Header fifth', () => {
        const wrapper = shallow(<Start/>)
     expect(wrapper.find('.Wins').prop('header')).toEqual('Wins');
       });
       test('Header sixth', () => {
        const wrapper = shallow(<Start/>)
     expect(wrapper.find('.action').prop('header')).toEqual('Actions');
       });
      test("show more", () => {
        const wrapper = shallow(<Start />);
        expect(wrapper.find('.show-more-button').text()).toContain("Show More");
      });
      // test('api first data1', () => {
      //   const wrapper = shallow(<started/>);
      //   const table = wrapper.find('.p-datatable-wrapper tr');
      //   expect(table).toHaveLength(0);
        // const table = wrapper.find('table');
        // const row = render(<tr />)
        // const node = render(<Node />);
   
            // expect(table).toHaveLength(1);
            // expect(row).toHaveLength(1);
            // expect(node).toHaveLength(1);
      
   
      // });
  });
  // describe('With Enzyme', () => {
  //   it('App shows "About"', () => {
  //     const about = shallow(
  //       <Start />
  //     ).dive()
  //     expect(about.find('th.Name .p-column-title').text()).toEqual('Name')
  //   })
  // })