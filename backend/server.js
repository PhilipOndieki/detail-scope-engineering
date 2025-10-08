import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/home', (req, res) => {
  res.json({
    message: 'Welcome to Dual Scope Engineering',
    page: 'home'
  });
});

app.get('/api/about', (req, res) => {
  res.json({
    title: 'About Dual Scope Engineering',
    content: {
      mission: 'Dual Scope Engineering is a leading distributor of industrial components, committed to delivering quality products and exceptional service to keep your operations running smoothly.',
      vision: 'To be the most trusted partner in industrial component distribution, known for reliability, technical expertise, and customer-first solutions.',
      values: [
        'Quality: We only source from trusted manufacturers',
        'Expertise: Our team brings decades of industry knowledge',
        'Reliability: Fast delivery and consistent availability',
        'Partnership: We work with you to find the right solutions'
      ],
      history: 'Founded with a commitment to engineering excellence, Dual Scope Engineering has grown into a trusted supplier for industrial operations across multiple sectors. Our extensive inventory and technical support have made us the go-to partner for businesses seeking reliable industrial components.'
    }
  });
});

app.get('/api/careers', (req, res) => {
  res.json({
    title: 'Careers',
    status: 'Currently not enrolling'
  });
});

app.get('/api/contact', (req, res) => {
  res.json({
    title: 'Talk to Our Team',
    content: {
      email: 'info@dualscopeengineering.com',
      phone: '+1 (555) 123-4567',
      address: '123 Industrial Drive, Engineering District',
      hours: 'Monday - Friday: 8:00 AM - 6:00 PM'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
