# DocMate - Doctor Appointment Booking System  

![DocMate Logo](https://via.placeholder.com/150x50?text=DocMate)  
**Live Demo:** [https://docmate-8ygo.onrender.com/](https://docmate-8ygo.onrender.com/)  

## Overview  
**DocMate** is a complete web-based doctor appointment booking system that connects patients with healthcare providers. The system features three distinct user roles with specialized dashboards for patients, doctors, and administrators.

## Key Features  

### For Patients 👩‍⚕️👨‍⚕️
- Browse verified doctors by specialty
- Real-time availability checking
- Secure online appointment booking
- Appointment history tracking
- Profile management

### For Doctors 🩺
- Appointment calendar management
- Availability toggle (on/off)
- Appointment status updates (completed/cancelled)
- Patient visit history
- Profile customization

### For Admins 🔐
- Full doctor management (add/edit/remove)
- System-wide appointment oversight
- Statistical analytics dashboard
- User management capabilities
- Emergency appointment cancellation

## Technology Stack  

### Frontend
- **Patient Portal**: React.js, Redux Toolkit, Tailwind CSS
- **Admin/Doctor Dashboard**: React.js, Material UI, Chart.js

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT Authentication
- Bcrypt for password hashing

### Deployment
- Hosted on Render
- MongoDB Atlas cloud database

## Project Structure
```
docmate/
├── frontend/        # Patient-facing interface
├── admin/           # Admin & Doctor dashboard
├── backend/         # API server
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account or local MongoDB
- Git

### Local Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/DocMate.git
   cd DocMate
   ```

2. Set up backend:
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your credentials
   npm start
   ```

3. Set up frontend (Patient):
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

4. Set up admin panel:
   ```bash
   cd ../admin
   npm install
   npm start
   ```

## Deployment Notes
The live version is deployed on Render with:
- Automatic SSL certification
- Continuous deployment from GitHub
- MongoDB Atlas cloud database
- Environment-based configuration

## API Documentation
The backend provides RESTful API endpoints documented with Swagger. Access the API docs at:
`https://docmate-8ygo.onrender.com/api-docs`

## Test Credentials
**Patient**  
Email: patient@example.com  
Password: Patient@123  

**Doctor**  
Email: doctor@example.com  
Password: Doctor@123  

**Admin**  
Email: admin@example.com  
Password: Admin@123  

## Known Issues
- Session timeout after 1 hour of inactivity
- Limited browser support (works best on Chrome/Firefox latest)

## Future Roadmap
- [ ] Mobile app development
- [ ] Video consultation integration
- [ ] Multi-language support
- [ ] Payment gateway integration

## License
MIT License - See [LICENSE](LICENSE) file for details.

## Support
For support or feature requests, please contact:  
📧 support@docmate.example.com  
🐛 [GitHub Issues](https://github.com/yourusername/DocMate/issues)  

---

**Note:** The live demo might have rate limits or restricted access to certain admin features for security reasons. For full testing, consider running locally with the provided test credentials.
