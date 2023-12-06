import React from 'react'
import * as Scriptlink from '../../components/fragment/Scriptlink'
import * as Header from '../../components/fragment/Header'
import * as AdminSidebar from '../../components/fragment/Adminsidebar'
import * as AdminFooter from '../../components/fragment/Adminfooter'
import * as Script from '../../components/fragment/Script'

const AdminLayout = ({children}) => {
  return (

    <div>
        <html lang="ko">
            <head>
                <Scriptlink/>
            </head>
            <body>
                <Header/>
                <div className='row m-0'>
                    <AdminSidebar/>
                    <div className="container">
                        {children}
                    </div>
                </div>
                <AdminFooter/>
                <Script/>
            </body>
        </html>
    </div>
    
  )
}

export default AdminLayout