import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF , FaInstagram, FaTwitter ,FaYoutube  } from 'react-icons/fa';

const Footer = () => {
return (
    <footer className="bg-black text-white py-4">
        <Container>
            <Row className="mb-4">
            <Col xs="auto" className="me-3-f">
            <FaFacebookF size={20} />
            </Col>
            <Col xs="auto" className="me-3-i">
            <FaInstagram size={20} />
            </Col>
            <Col xs="auto" className="me-3-t">
            <FaTwitter size={20} />
            </Col>
            <Col xs="auto " className="me-3-y">
            <FaYoutube size={20} />
            </Col>
        </Row>
        

        <Row className="Text">
            <Col xs={6} md={3} className="mb-3">
            <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Audio Description</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Investor Relations</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Legal Notices</a></li>
            </ul>
            </Col>
            <Col xs={6} md={3} className="mb-3">
            <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Help Centre</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Jobs</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Cookie Preferences</a></li>
            </ul>
            </Col>
            <Col xs={6} md={3} className="mb-3">
            <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Gift Cards</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Terms of Use</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Corporate Information</a></li>
            </ul>
            </Col>
            <Col xs={6} md={3} className="mb-3">
            <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Media Centre</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
            <p className="small text-muted">© 1997-2025 ReelPath, Inc.</p>
            </Col>
        </Row>
        </Container>
    </footer>
);
};

export default Footer;