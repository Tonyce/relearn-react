'use strict';


import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, IndexRoute, Route, Link } from 'react-router';


import IndexHeader from './components/index/Header';
import AboutHeader from './components/about/Header';
import ScheduleHeader from './components/schedule/Header';

import IndexMain from './components/index/Main';
import AboutMain from './components/about/Main';
import ScheduleMain from './components/schedule/Main';

import Card from './components/Card';
import Footer from './components/Footer';

import './app.css'

// const ACTIVE = { 'width': '100%' }

class Nav extends React.Component {
	
	constructor() {
		super();
	}

	render() {
		return (
			<nav className="flex-layout h-center v-between">
				<div>
					<Link className="center" to="/">INDEX</Link>
				</div>
				<div className="center">
					<Link className="center" to="/about" activeClassName='animate'>ABOUT</Link>
					<Link className="center" to="/schedule" activeClassName='animate'>SCHEDULE</Link>
				</div>	
			</nav>
		);
	}
}

class App extends React.Component {
	render() {
		let { header, main } = this.props;

		// console.log(main)
		// console.log(ma)
		main = <div key={this.props.location.pathname}>{main}</div>;
		// console.log(main.children)
		let card = <div className="card" key={this.props.location.pathname}>{Card}</div>;

		return (
			<div>
				<header>
					<Nav />
					{ header || <IndexHeader /> }
				</header>

				<div id="main">
				 	<ReactCSSTransitionGroup
						component="div"
						transitionName="example"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						{card}
					</ReactCSSTransitionGroup>

					<ReactCSSTransitionGroup
						component="div"
						transitionName="example-delay"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						{main}
					</ReactCSSTransitionGroup>
				</div>
				<Footer />
				
			</div>
		)
	}
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute components={{ header: IndexHeader, main: IndexMain }}></IndexRoute>
			<Route path="about" components={{ header: AboutHeader, main: AboutMain }}></Route>
			<Route path="Schedule" components={{ header: ScheduleHeader, main: ScheduleMain }}></Route>
		</Route>
	</Router>
), document.getElementById('app'))


// import React from 'react'
// import { render, findDOMNode } from 'react-dom'
// import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
// import ContactStore from './ContactStore'
// import './app.css'

// const App = React.createClass({
//   getInitialState() {
//     return {
//       contacts: ContactStore.getContacts(),
//       loading: true
//     }
//   },

//   componentWillMount() {
//     ContactStore.init()
//   },

//   componentDidMount() {
//     ContactStore.addChangeListener(this.updateContacts)
//   },

//   componentWillUnmount() {
//     ContactStore.removeChangeListener(this.updateContacts)
//   },

//   updateContacts() {
//     if (!this.isMounted())
//       return

//     this.setState({
//       contacts: ContactStore.getContacts(),
//       loading: false
//     })
//   },

//   render() {
//     const contacts = this.state.contacts.map(function (contact) {
//       return <li key={contact.id}><Link to={`/contact/${contact.id}`}>{contact.first}</Link></li>
//     })

//     return (
//       <div className="App">
//         <div className="ContactList">
//           <Link to="/contact/new">New Contact</Link>
//           <ul>
//             {contacts}
//           </ul>
//         </div>
//         <div className="Content">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// })

// const Index = React.createClass({
//   render() {
//     return <h1>Address Book</h1>
//   }
// })

// const Contact = React.createClass({
//   contextTypes: {
//     router: React.PropTypes.object.isRequired
//   },

//   getStateFromStore(props) {
//     const { id } = props ? props.params : this.props.params

//     return {
//       contact: ContactStore.getContact(id)
//     }
//   },

//   getInitialState() {
//     return this.getStateFromStore()
//   },

//   componentDidMount() {
//     ContactStore.addChangeListener(this.updateContact)
//   },

//   componentWillUnmount() {
//     ContactStore.removeChangeListener(this.updateContact)
//   },

//   componentWillReceiveProps(nextProps) {
//     this.setState(this.getStateFromStore(nextProps))
//   },

//   updateContact() {
//     if (!this.isMounted())
//       return

//     this.setState(this.getStateFromStore())
//   },

//   destroy() {
//     const { id } = this.props.params
//     ContactStore.removeContact(id)
//     this.context.router.push('/')
//   },

//   render() {
//     const contact = this.state.contact || {}
//     const name = contact.first + ' ' + contact.last
//     const avatar = contact.avatar || 'http://placecage.com/50/50'

//     return (
//       <div className="Contact">
//         <img height="50" src={avatar} key={avatar} />
//         <h3>{name}</h3>
//         <button onClick={this.destroy}>Delete</button>
//       </div>
//     )
//   }
// })

// const NewContact = React.createClass({
//   contextTypes: {
//     router: React.PropTypes.object.isRequired
//   },

//   createContact(event) {
//     event.preventDefault()

//     ContactStore.addContact({
//       first: findDOMNode(this.refs.first).value,
//       last: findDOMNode(this.refs.last).value
//     }, (contact) => {
//       this.context.router.push(`/contact/${contact.id}`)
//     })
//   },

//   render() {
//     return (
//       <form onSubmit={this.createContact}>
//         <p>
//           <input type="text" ref="first" placeholder="First name" />
//           <input type="text" ref="last" placeholder="Last name" />
//         </p>
//         <p>
//           <button type="submit">Save</button> <Link to="/">Cancel</Link>
//         </p>
//       </form>
//     )
//   }
// })

// const NotFound = React.createClass({
//   render() {
//     return <h2>Not found</h2>
//   }
// })

// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Index} />
//       <Route path="contact/new" component={NewContact} />
//       <Route path="contact/:id" component={Contact} />
//       <Route path="*" component={NotFound} />
//     </Route>
//   </Router>
// ), document.getElementById('app'))


// import React from 'react'
// import { render } from 'react-dom'
// import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'

// const PICTURES = [
//   { id: 0, src: 'http://placekitten.com/601/601' },
//   { id: 1, src: 'http://placekitten.com/610/610' },
//   { id: 2, src: 'http://placekitten.com/620/620' }
// ]

// const Modal = React.createClass({
//   styles: {
//     position: 'fixed',
//     top: '20%',
//     right: '20%',
//     bottom: '20%',
//     left: '20%',
//     padding: 20,
//     boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
//     overflow: 'auto',
//     background: '#fff'
//   },

//   render() {
//     return (
//       <div style={this.styles}>
//         <p><Link to={this.props.returnTo}>Back</Link></p>
//         {this.props.children}
//       </div>
//     )
//   }
// })

// const App = React.createClass({

//   componentWillReceiveProps(nextProps) {
//     // if we changed routes...
//     if ((
//       nextProps.location.key !== this.props.location.key &&
//       nextProps.location.state &&
//       nextProps.location.state.modal
//     )) {
//       // save the old children (just like animation)
//       this.previousChildren = this.props.children
//     }
//   },

//   render() {
//     let { location } = this.props

//     let isModal = (
//       location.state &&
//       location.state.modal &&
//       this.previousChildren
//     )

//     return (
//       <div>
//         <h1>Pinterest Style Routes</h1>

//         <div>
//           {isModal ?
//             this.previousChildren :
//             this.props.children
//           }

//           {isModal && (
//             <Modal isOpen={true} returnTo={location.state.returnTo}>
//               {this.props.children}
//             </Modal>
//           )}
//         </div>
//       </div>
//     )
//   }
// })

// const Index = React.createClass({
//   render() {
//     return (
//       <div>
//         <p>
//           The url `/pictures/:id` can be rendered anywhere in the app as a modal.
//           Simply put `modal: true` in the location descriptor of the `to` prop.
//         </p>

//         <p>
//           Click on an item and see its rendered as a modal, then copy/paste the
//           url into a different browser window (with a different session, like
//           Chrome -> Firefox), and see that the image does not render inside the
//           overlay. One URL, two session dependent screens :D
//         </p>

//         <div>
//           {PICTURES.map(picture => (
//             <Link
//               key={picture.id}
//               to={{
//                 pathname: `/pictures/${picture.id}`,
//                 state: { modal: true, returnTo: this.props.location.pathname }
//               }}
//             >
//               <img style={{ margin: 10 }} src={picture.src} height="100" />
//             </Link>
//           ))}
//         </div>

//         <p><Link to="/some/123/deep/456/route">Go to some deep route</Link></p>

//       </div>
//     )
//   }
// })

// const Deep = React.createClass({
//   render() {
//     return (
//       <div>
//         <p>You can link from anywhere really deep too</p>
//         <p>Params stick around: {this.props.params.one} {this.props.params.two}</p>
//         <p>
//           <Link to={{
//             pathname: `/pictures/0`,
//             state: { modal: true, returnTo: this.props.location.pathname }
//           }}>
//             Link to picture with Modal
//           </Link><br/>
//           <Link to={`/pictures/0`}>
//             Without modal
//           </Link>
//         </p>
//       </div>
//     )
//   }
// })

// const Picture = React.createClass({
//   render() {
//     return (
//       <div>
//         <img src={PICTURES[this.props.params.id].src} style={{ height: '80%' }} />
//       </div>
//     )
//   }
// })

// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Index}/>
//       <Route path="/pictures/:id" component={Picture}/>
//       <Route path="/some/:one/deep/:two/route" component={Deep}/>
//     </Route>
//   </Router>
// ), document.getElementById('app'))


/*
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import data from './data'
import './app.css'

class Category extends React.Component {
	render() {
		console.log("category")
		console.log(this.props.params)

		const category = data.lookupCategory(this.props.params.category)

		return (
			<div>
				<h1>{category.name}</h1>
				{this.props.children || (<p>{category.description}</p>)}
			</div>
		)
	}
}

class CategorySidebar extends React.Component {
	render() {
		console.log("CategorySidebar")
		console.log(this.props.params)
		const category = data.lookupCategory(this.props.params.category)

		return (
			<div>
				<Link to="/">◀︎ Back</Link>
				<h2>{category.name} Items</h2>
				<ul>
					{category.items.map((item, index) => (
						<li key={index}>
							<Link to={`/category/${category.name}/${item.name}`}>{item.name}</Link>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

class Item extends React.Component {
	render() {
		console.log("item params:")
		console.log(this.props.params)
		const { category, item } = this.props.params
		console.log(category, item);
		const menuItem = data.lookupItem(category, item)

		return (
				<div>
				<h1>{menuItem.name}</h1>
				<p>${menuItem.price}</p>
				</div>
			)
	}
}

class Index extends React.Component {
	render() {
		return (
			<div>
				<h1>Sidebar</h1>
				<p>
					Routes can have multiple components, so that all portions of your UI
					can participate in the routing.
				</p>
			</div>
		)
	}
}

class IndexSidebar extends React.Component {
	render() {
		return (
			<div>
				<h2>Categories</h2>
				<ul>
					{data.getAll().map((category, index) => (
						<li key={index}>
						<Link to={`/category/${category.name}`}>{category.name}</Link>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		const { content, sidebar } = this.props
		console.log(content, sidebar);
		return (
			<div>
				<div className="Sidebar">
					{sidebar || <IndexSidebar />}
				</div>
				<div className="Content">
					{content || <Index />}
				</div>
			</div>
		)
	}
}

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="category/:category" components={{ content: Category, sidebar: CategorySidebar }}>
				<Route path=":item" component={Item} />
			</Route>
		</Route>
	</Router>
), document.getElementById('app'))
*/

