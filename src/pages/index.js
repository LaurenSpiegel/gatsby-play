import React from "react"
import Link from "gatsby-link";

export default () => <div style={{ color: `pink` }}>
    <h1>Hello, Gatsby!!!</h1>
    <p>Welcome to my world!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <div>
      <Link to="/page-2/">My second page</Link>
    </div>
    <div>
      <Link to="/page-3/">My third page</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
</div>
