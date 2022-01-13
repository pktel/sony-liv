import React, { Component } from 'react'

import DATA from './Data.json'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-background row m-auto">
                <p className="col-12 "><strong>Home</strong><i>: {Object.values(DATA).map((item, index) => item.isDisplay && item.Home)}</i></p>
                <p className="col-12 "><strong>Shows</strong><i>: {Object.values(DATA).map((item, index) => item.isDisplay && item.Shows)}</i></p>
                <p className="col-12 "><strong>Language</strong><i>: {Object.values(DATA).map((item, index) => item.isDisplay && item.Language)}</i></p>
                <p className="col-12"><strong>Movies</strong><i>: {Object.values(DATA).map((item, index) => item.isDisplay && item.Movies)}</i></p>
                <p className="col-12 "><strong>Sports</strong><i>: {Object.values(DATA).map((item, index) => item.isDisplay && item.Sports)}</i></p>
                <p className="col-12 "><strong>Explore</strong><i>: {Object.values(DATA).map((item, index) => item.isDisplay && item.Explore)}</i></p>
                <div className='content'>
                    <strong title='Privacy Policy'>Privacy Policy</strong>
                    <strong title='Terms of Service'>Terms of Service</strong>
                </div>
                <div>
                    <img className="icons" src="data:image/svg+xml,%3csvg width='37' height='37' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M30.063 0H6.938A6.94 6.94 0 000 6.938v23.125A6.94 6.94 0 006.938 37h23.125A6.94 6.94 0 0037 30.062V6.938A6.94 6.94 0 0030.062 0zM11.44 31.408H5.692l-.033-17.21h5.748l.033 17.21zM8.422 11.946h-.034c-1.879 0-3.09-1.295-3.09-2.907 0-1.651 1.25-2.902 3.163-2.902 1.912 0 3.085 1.25 3.124 2.902 0 1.612-1.218 2.907-3.163 2.907zm22.947 19.462H25.57v-9.35c0-2.263-.6-3.803-2.624-3.803-1.545 0-2.38 1.04-2.78 2.046-.15.361-.188.856-.188 1.362v9.745h-5.826l-.033-17.21h5.825l.034 2.429c.745-1.151 1.984-2.78 4.953-2.78 3.68 0 6.431 2.402 6.431 7.566v9.995h.006z' fill='%23B4B4B4'/%3e%3c/svg%3e" alt="linkedin" width="37" height="37" />
                    <img className="icons" src="data:image/svg+xml,%3csvg width='37' height='37' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.457 0C4.69 0 0 4.691 0 10.457v16.086C0 32.31 4.691 37 10.457 37h16.086C32.31 37 37 32.309 37 26.543V10.457C37 4.69 32.309 0 26.543 0H10.457zm18.5 6.435a1.608 1.608 0 110 3.217 1.608 1.608 0 110-3.217zM18.5 8.848c5.323 0 9.652 4.33 9.652 9.652 0 5.323-4.33 9.652-9.652 9.652-5.323 0-9.652-4.33-9.652-9.652 0-5.323 4.33-9.652 9.652-9.652zm0 1.609c-4.436 0-8.043 3.607-8.043 8.043 0 4.436 3.607 8.043 8.043 8.043 4.436 0 8.043-3.607 8.043-8.043 0-4.436-3.607-8.043-8.043-8.043z' fill='%23B4B4B4'/%3e%3c/svg%3e" alt="instagram" width="37" height="37" />
                    <img className="icons" src="data:image/svg+xml,%3csvg width='37' height='37' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M33.61 0H3.39C1.542 0 0 1.542 0 3.39v30.22C0 35.458 1.542 37 3.39 37H18.5V21.583h-4.625v-4.625H18.5v-4.625c0-3.854 1.542-6.166 6.167-6.166h4.625v4.625h-2.006c-1.385 0-2.62 1.234-2.62 2.62v3.546h6.167l-.77 4.625h-5.396V37h8.943c1.848 0 3.39-1.542 3.39-3.39V3.39C37 1.542 35.458 0 33.61 0z' fill='%23B4B4B4'/%3e%3c/svg%3e" alt="facebook" width="37" height="37" />
                    <img className="icons" src="data:image/svg+xml,%3csvg width='37' height='37' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M37 4.733a13.218 13.218 0 01-4.36 1.431c1.566-1.127 2.77-2.912 3.336-5.037A13.863 13.863 0 0131.16 3.34C29.774 1.57 27.8.456 25.62.456c-4.192 0-7.595 4.083-7.595 9.113 0 .715.066 1.41.199 2.074-6.311-.376-11.906-4.004-15.646-9.517-.656 1.344-1.03 2.912-1.03 4.581 0 3.158 1.338 5.948 3.38 7.58a6.621 6.621 0 01-3.44-1.14v.115c0 4.415 2.614 8.1 6.089 8.932a6.385 6.385 0 01-2 .325c-.487 0-.97-.058-1.427-.166.964 3.62 3.77 6.25 7.088 6.33-2.595 2.443-5.871 3.895-9.424 3.895-.615 0-1.217-.043-1.813-.13 3.36 2.587 7.347 4.098 11.635 4.098 13.965 0 21.601-13.883 21.601-25.922 0-.39-.012-.788-.024-1.178 1.482-1.286 2.77-2.89 3.788-4.712z' fill='%23B4B4B4'/%3e%3c/svg%3e" alt="twitter" width="37" height="37" />
                </div>
                <p className="footer-company-name">Sony Pictures Prvt. Ltd &copy; 2021</p>
            </footer>
        )
    }
}
