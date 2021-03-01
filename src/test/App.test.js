import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Welcome from '../Main/Welcome';
import Signup from '../Access/Signup'; 
import Login from '../Access/Login'; 
import MainMenu from '../Main/MainMenu';
import Lists from '../Lists/Lists';
import List from '../Lists/List/List';
import ListPreview from '../Lists/List/ListPreview';
import ListEdit from '../Lists/List/ListEdit';
import Suggestions from '../Lists/Suggestions/Suggestions';
import MovieSearch from '../Movies/MovieSearch';
import Movie from '../Movies/Movie';
import MoviePreview from '../Movies/MoviePreview';
import MovieOptions from '../Movies/MovieOptions';
import Users from '../Admin/Users'; 
import User from '../Users/User'; 
import UserEdit from '../Users/UserEdit'; 
import Admin from '../Admin/Admin'
import ResetPassword from '../Users/ResetPassword'; 
import App from '../App';

describe('The App', () => {
  const app = <BrowserRouter> <App /> </BrowserRouter>;
  global.scroll = jest.fn();

  describe('Smoke Test', () => {
    it('renders learn react link', () => {
      render(app);
    });
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(app, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
  describe('Snapshot Test', () => {
    it('renders the UI as expected', () => {
      const tree = renderer.create(app).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('The Components', () => {
  describe('The Header', () => {
    const header = <BrowserRouter> <Header /> </BrowserRouter>;

    it('renders without crashing', () => {
      const div = document.createElement('div');

      ReactDOM.render(header, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
      const tree = renderer.create(header).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('The Footer', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');

      ReactDOM.render(<Footer />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
      const tree = renderer.create(<Footer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('The Welcome Page', () => {
    const welcome = <BrowserRouter><Welcome /></BrowserRouter>;

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(welcome, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
      const tree = renderer.create(welcome).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('The Signup Page', () => {
    const signup = <BrowserRouter><Signup /></BrowserRouter>;

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(signup, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
      const tree = renderer.create(signup).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('The Login Page', () => {
    const login = <BrowserRouter><Login /></BrowserRouter>;

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(login, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
      const tree = renderer.create(login).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('The Main Menu', () => {
    const mainMenu = <BrowserRouter><MainMenu /></BrowserRouter>;

    it('renders without crashing', () => {

      const div = document.createElement('div');
      ReactDOM.render(mainMenu, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
      const tree = renderer.create(mainMenu).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('User-Related', () => {
    describe('The Users', () => {
      const users = <BrowserRouter> <Users /> </BrowserRouter>;
      it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(users, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('render the UI as expected', () => {
        const tree = renderer.create(users).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The User Page', () => {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<User history={{}} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(<User history={{}} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The Edit User Page', () => {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserEdit />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(<UserEdit />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The Reset Password Page', () => {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ResetPassword />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(<ResetPassword />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
  describe('List-Related', () => {
    describe('The Lists', () => {
      it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Lists />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('render the UI as expected', () => {
        const tree = renderer.create(<Lists />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The List Page', () => {
    const list = <BrowserRouter><List /></BrowserRouter>;

      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(list, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(list).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The List Preview', () => {
    const listPreview = <BrowserRouter><ListPreview /></BrowserRouter>;

      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(listPreview, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(listPreview).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The Edit List Page', () => {
      const listEdit = <BrowserRouter><ListEdit /></BrowserRouter>;

      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(listEdit, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(listEdit).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The Suggestions Page', () => {
      const suggestions = <BrowserRouter><Suggestions /></BrowserRouter>;

      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(suggestions, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(suggestions).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
  describe('Movie-Related', () => {
    describe('The Movie Search Page', () => {
      const movieSearch = <BrowserRouter> <MovieSearch /> </BrowserRouter>;

      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(movieSearch, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(movieSearch).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The Movie Page', () => {
      const movie = <BrowserRouter> <Movie /> </BrowserRouter>;

      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(movie, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(movie).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The Movie Preview', () => {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MoviePreview />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(<MoviePreview />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The Movie Options', () => {
      const movieOptions = <BrowserRouter> <MovieOptions movie={{}} /> </BrowserRouter>;

      it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(movieOptions, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('render the UI as expected', () => {
        const tree = renderer.create(movieOptions).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
  describe('Admin-Related', () => {
    describe('The Admin Page (All Lists)', () => {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Admin />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(<Admin />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe('The Users Page (All Users)', () => {
      const users = <BrowserRouter> <Users /> </BrowserRouter>;
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(users, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(users).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});


