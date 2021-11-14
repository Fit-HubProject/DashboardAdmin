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
                    <img className="mb-4" alt="" width="72" height="72" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADGCAMAAADFYc2jAAAAqFBMVEX///824IsAAAAp34Xb+upj5aIz4Ile5aAm34b1/fqysrLAwMD6+vpaWloh3oIW3X1CQkLE9dqj8Mfu/PVN4pVkZGQmJiaampq5ubnm+/Cw8c289NXZ2dnf39+UlJT09PRMTExv56gUFBSX7r9ra2uoqKh7e3vR+ON66a6FhYXMzMxwcHDr6+stLS01NTWNjY0aGhoA2nOK67eb7sFT45lGRkap8MofHx99GU6DAAAF90lEQVR4nO2c6WKiPBSG2Yy4BbUuFXFtXdra2mmd9v7v7FNIEAJ2MKH60b7PrxLOMDwQkkMS1DQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADABblpl/JmNry2VGYqZcfMG+rcXVsrK2uqfwNOUe4/Id+hb5au7ZWNiv0t+nb52mLZgD70oQ996EOfQZwAKnV5Cq5v0127ZVlWy70ry/gz/cnIZ6N6lhMvOJCyrki6Pu20Kjxi5cjrV+e9Pa/duuJZ1gz/OFPV4yRI1Y+9sSjpGz4NdX2f5kX0nY9oRKBvU2qe8RQUWJ++xSJ8fafcdtdntILF1Tdn8YiDvuke/rL0zP6F1SfUikfs9SlrC1r2j9c313zXwF2Xy6UPlxLKu4FSVv/C6tMV2+Pq1LRtm5r7Ks+j37IODRVVn3TYjtafcAexefTM/OH6lNX9SidSzkfusrd9hdVvB+WraDUnnYFfWEq5+SS1QhRWnz36d7Fcz6auZQ07KU8+Ld2ltQdF1beD+yyOf5N9zpeW9Zh6xU1LiguqT3Smn62Lo50b7eMn6e99/OJdlkbO3O2jf6R+J4M+7RzSod+qT0t+MvhT9AndozN93Tls8X029Yn1cWYnSIXbfyjH/Fq/PhnVbmve5HyJmD47zGaSqz7ZuXuGLL0f+huzYKe5DjbfIu0hLbNI68PlvJMv9OvVrsE2F/wC1BfjA1tPOKu+XzwOB7ci+l5/yg7z8vCYp/4sufc96P74+EeLJu2jWF/oVz+NI70a02cqVeFA86C4Juj/1bx7I0pD9QJE9ZNCLKVx2qI+3aXYn9bXtPhpG8Y40G8EW7fCgXrp+s2FISJeuIvoO+tE6Ff63U0zcd5jCf00ni6vT0+M4p+8+92U867lo29s89JP7k3XN9Pv/Wl9xn2/ungKt17q+egr1f+IfmlwgJX7fw/ezDR92ro57GSVpTIIaemn9efjoKPadCOnLaP/fD+uVsfdXljwKvYbUvo6ORCmPfZhiz/qQuX3IykbBGg7JOS0/vOxjeYV4L4uo79gveGof6xVuej7YqlZX7LlP9QBpp8h6/Pb/oScMTlffxtJmUbPvFS++7uMfiOWod2yUu9c/Xn8MR/N2YGW/2/9l3h+unlh9fhc/b9CGK8Uz9JznxfRF195WOu3PTvtEd8WeDJV0yS5iv4Dr7Oq+p5q7b+KPmu0n5T1+b9vFlG/q6yvjdnt/6X6vBORHQcpuP4j05dt+guuP4L+L9bnPZ/s2rGC6/O8r9hNn/jKnlmfjX7NJe2vrc/S34Wkfp29PIsvAwXR59n/WFKft3zSA17y+mYe+uzuiTl7Vv0t05d+4Ve/+xIT3Ed99vIzldPn7X5TetGwgj6b+4gteg1nxTLqs7968X6bj5L8Q3/Ch8/lB3sVKv87O8JxsSsJr0RWfd5xxdq+cGgroR+3b/A4+RXjCvp8uNt1/FhC6W7IlwRl1Z8wgXnE4Dg+mtCPjBrVH8OwvrS9gn64BE77OHz6QPXZsBJGZNXX+HzllFf/zdI4qW80HhaefwlGi+PMicoyd3l93QlXv1ZWw5YVi8isfxtadBe1x9oirNCp+qyqvEa3PlU+clDQF1Z+y+nXY77cb/6lfjxWaZJXQV+nLXX942h1hGozs35PbYpbRZ+YK/Fw5+trXk8wevayz/HdKy53UdHXCRHv/7t5tr7mTWNGT5tk2jPZxh738EJJD3Cf1K+k6SdXd7BwpxSpAIO2zjv+uL7YNjP9cOarGl6A+dKfr5wL+nseo7OaBz6XyvIpC9pLZf/3J+KWneBHKVIW+5l2+c5dWVbr462sH9d98g/ZPB+xbd6IxRNv3J1OG8sq6/5HQUB8cqi+Gd32l93GPrC7XHjKX8el6tsBwl0OClMXuxF/DRiNf+9Y8M8YVYF+IYA+9KGfL2ZB9LVd1o+zzqIwP9tkmfn7E2d3c22vrKx2uf9mF5kVxn6PlTeDf/+fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJj/AKGeq/8nZ/hiAAAAAElFTkSuQmCC" />
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