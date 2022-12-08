import Logo from './Logo'
import Navigation from './Navigation'

export default function Header() {
	return (
        <div className='kontener_flex header-box wysrodkowanie'>
            <div className="kontener_flex header">
                <Logo />
                <Navigation />
            </div>
        </div>
	)
}