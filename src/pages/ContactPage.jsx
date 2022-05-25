import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Contacts from '../components/contacts/Contacts'
import Map from '../components/contacts/Map'
import Header from '../components/Header'
const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Холбоо барих" pagetitle='Contact' />
        <Contacts />
        <Map />
      </main>
    </>
  )
}

export default ContactPage