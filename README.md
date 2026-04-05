# Finance Dashboard Backend

Basic backend for managing users, financial records, and dashboard summaries.

## Setup

npm install  
npm run dev  

## Endpoints

Auth  
POST /api/auth/register  
POST /api/auth/login  

Records  
GET /api/records  
POST /api/records  
PUT /api/records/:id  
DELETE /api/records/:id  

Dashboard  
GET /api/dashboard  

## Notes

Role-based access is applied on record modification.  
Viewer and analyst can only read data.  
Admin can manage records.