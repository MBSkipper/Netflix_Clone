import Container from 'react-bootstrap/Container'
import GetStarted from '../components/GetStarted'
import TrendingNowCard from '../components/TrendingNowCard'


function MainComponent() {
  return (
    <Container className='text-center mt-5'>
        <h1 className='display-4'>Unlimited movies, shows and more</h1>
        <p className='lead'>Starts at £18.99. Cancel at any time.</p>
        <p className='lead'>Ready to watch? Enter your email to create or restart your membership.</p>

        <GetStarted />

        <h2 className='display-6'>Trending now</h2>

        <div className='d-flex gap-4 my-5
        '>
            <TrendingNowCard 
            image='https://th.bing.com/th/id/OIP.2eQxxUZmW7dTkq1WtrjQ-AHaLH?w=189&h=283&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3'
            ranking={1}/>

            <TrendingNowCard 
            image='https://th.bing.com/th/id/OIP._FK167CK3E74mCU4Jq3UugHaLH?w=189&h=284&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3'
            ranking={2}/>

            <TrendingNowCard 
            image='https://th.bing.com/th/id/OIP.Mr2cQb_mB3iDLHZne8d-fgHaLH?w=189&h=284&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3'
            ranking={3}/>

            <TrendingNowCard 
            image='https://th.bing.com/th/id/OIP.JqwU43TK8PLSly_E-mHU-QHaLH?w=189&h=284&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3'
            ranking={4}/>

            <TrendingNowCard 
            image='https://th.bing.com/th/id/OIP.M33R1T8T-U02CeQRPSy3TQHaLH?w=189&h=283&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3'
            ranking={5}/>

            <TrendingNowCard 
            image='https://th.bing.com/th/id/OIP.8YRmp6afItZ4OIrcnj5O9gHaLH?w=189&h=283&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3'
            ranking={6}/>

            <TrendingNowCard 
            image='https://th.bing.com/th/id/OIP.g2XyIRGTGTMVOS0IV8wmIwHaLH?w=189&h=283&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3'
            ranking={7}/>

            <TrendingNowCard 
            image='https://th.bing.com/th/id/OPEC.0hvvHaow0vmDig474C474?o=5&pid=21.1&w=193&h=212&c=7&dpr=2&o=7&rm=3'
            ranking={8}/>

            <TrendingNowCard 
            image='https://th.bing.com/th/id/OIP.cpk4e-x9d-OXhSoGSQ88ygHaLD?w=189&h=283&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3'
            ranking={9}/>

            <TrendingNowCard 
            image='https://th.bing.com/th/id/OIP.2eQxxUZmW7dTkq1WtrjQ-AHaLH?w=189&h=283&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3'
            ranking={10}/>

        </div>

        <GetStarted />




    </Container>
  )
}

export default MainComponent