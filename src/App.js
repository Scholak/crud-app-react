import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'

const Register = React.lazy(() => import('./pages/auth/register/Register'))
const Login  = React.lazy(() => import('./pages/auth/login/Login'))
const Profile = React.lazy(() => import('./pages/auth/profile/Profile'))
const ContactList = React.lazy(() => import('./pages/contact/list/List'))
const CreateContact = React.lazy(() => import('./pages/contact/create/Create'))
const EditContact = React.lazy(() => import('./pages/contact/edit/Edit'))
const ShowContact = React.lazy(() => import('./pages/contact/show/Show'))

const App = () => {
  return (
		<React.Suspense fallback={<h1>Loading...</h1>}>
			<BrowserRouter>
				<Routes>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/contacts' element={<ContactList />} />
					<Route path='/contacts/create' element={<CreateContact />} />
					<Route path='/contacts/edit/:id' element={<EditContact />} />
					<Route path='/contacts/show/:id' element={<ShowContact />} />
				</Routes>
			</BrowserRouter>
		</React.Suspense>
	)
}

export default App