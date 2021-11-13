import Head from 'next/head'
import Link from 'next/link'
import Layout from "../../components/Layout";
import '../../styles/comp.module.css'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function Login() {
  return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div className="login-wrap">
                <Form className="form-signin">
                    <img className="mb-4" alt="" width="72" height="72" src="logoFIHUB.png" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text" placeholder=" useremail@domain.com" className="mr-sm-2" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password 
                        <FormControl type="text" placeholder=" password" className="mr-sm-2" />
                            <Link href="/"><a>Forgot Password?</a></Link></FormLabel>
                        <FormControl type="password" className="mr-sm-2" />
                    </FormGroup>
                    <Button className="btn-lg btn-block" variant="primary">Sign In</Button>
                </Form>
            </div>
        </Layout>
      </>
  )
}