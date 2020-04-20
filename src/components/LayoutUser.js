import React, { PureComponent } from 'react'
import Link from 'next/link'

export default class LayoutUser extends PureComponent {
    render () {
        return (
            <div className='layout'>
                <header>
                    <img src='/static/next-logo.png'/>
                    <h3>nextjs redux</h3>
                    <menu>
                        <Link href='/about'>
                            <a>About</a>
                        </Link>
                        <Link href='/'>
                            <a>Redux demo</a>
                        </Link>
                    </menu>
                    <style jsx>{`
                      header {
                        display: flex;
                        align-items: center;
                        font-family: Monospace;
                        margin: 10px 20px;
                      }
                      h3 {
                        margin-left: 10px
                      }
                      img {
                        width: 30px;
                      }
                      menu > a {
                        margin-right: 16px;
                      }
                    `}</style>
                </header>
                {this.props.children}
            </div>
        )
    }
}
