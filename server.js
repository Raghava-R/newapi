// server.js

// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Dummy data
const dummyData = {
    "12345": {
        "field1": "value1",
        "field2": "value2",
        
    },
    "24242": {
        "lease_details": {
            "practice_name": "Central Texas Periodontics, P.A.",
            "lessor": "DC Rebels Investment Properties, LLC",
            "lessee": "Central Texas Periodontics, P.A.",
            "premises_address": "4913 Moreland Dr. #201, #202, #203 Georgetown, Texas 78633",
            "premises_sq_ft": 2600,
            "term_of_base_lease": "5 years",
            "commencement_date": "09/01/2022",
            "expiration_date": "09/30/2027",
            "base_rent_schedule": [
                {
                    "start_date": "09/01/2022",
                    "end_date": "08/31/2023",
                    "monthly_rate_usd": 6067.00,
                    "per_sf_per_year_usd": 28.00,
                    "sq_ft": 2600,
                    "detail": "Base Lease"
                },
                {
                    "start_date": "09/01/2023",
                    "end_date": "08/31/2024",
                    "monthly_rate_usd": 6249.01,
                    "per_sf_per_year_usd": 28.84,
                    "sq_ft": 2600,
                    "detail": "Base Lease"
                },
                
                // Add more rent schedule details if needed
            ],
            "operating_expenses": "Tenant pays $0.65/sf/month ($1,690/mo estimated)",
            "escalations_cpi": "3% (annual)",
            "tenant_improvements": "N/A",
            "renewal_option": "N/A",
            // Add more fields as needed
        },
    },
    "24257": {
        "practice_name": "N/A",
        "lessor": "Ryann 196 LLC",
        "lessee": "Balance Epigenetic Orthodontics Inc.",
        "premises_address": "2322 196th St SW Suite 201, Lynnwood, WA 98036",
        "premises_sq_ft": 1761,
        "term_of_base_lease": "N/A",
        "commencement_date": "N/A",
        "expiration_date": "05/31/2025",
        "base_rent_schedule": [
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 4109.00, "per_sf_per_year_usd": 28.00, "sq_ft": 1761, "detail": "Base Lease" },
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 4232.27, "per_sf_per_year_usd": 28.84, "sq_ft": 1761, "detail": "Base Lease" },
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 4359.94, "per_sf_per_year_usd": 29.71, "sq_ft": 1761, "detail": "Base Lease" },
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 4490.55, "per_sf_per_year_usd": 30.60, "sq_ft": 1761, "detail": "Base Lease" },
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 4625.56, "per_sf_per_year_usd": 31.52, "sq_ft": 1761, "detail": "Base Lease" },
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 4764.97, "per_sf_per_year_usd": 32.47, "sq_ft": 1761, "detail": "Base Lease" },
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 4907.32, "per_sf_per_year_usd": 33.44, "sq_ft": 1761, "detail": "Base Lease" },
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 5054.07, "per_sf_per_year_usd": 34.44, "sq_ft": 1761, "detail": "Base Lease" },
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 5205.22, "per_sf_per_year_usd": 35.47, "sq_ft": 1761, "detail": "Base Lease" },
          { "start_date": "N/A", "end_date": "N/A", "monthly_rate_usd": 5360.78, "per_sf_per_year_usd": 36.53, "sq_ft": 1761, "detail": "Base Lease" }
        ],
        "operating_expenses": "Tenant pays one-twelfth of Tenant's Pro Rata Share of Operating Costs each month. First year CAM shall not exceed $10/sf. CAM Cap is 5%/year",
        "escalations_cpi": "N/A",
        "tenant_improvements": "BL: T shall spend $110/sf ($113,344) for tenant's improvements.",
        "renewal_option": "BL: 2 options of 60 months each with 90-180 days prior notice at fair market rent w/ 3% annual increases.",
        "renewal_notice_date": {
          "1": "03/02/2025",
          "2": "03/02/2030"
        },
        "holdover": "150% of rental rate last payable",
        "signage": "With LL's approval, T may install signage at T's expense...Tenant will be allowed 2 signs on the Building: 1 building top sign facing 196th Street SW and 1 building top sign on the west facing façade of the Building...",
        "exclusivity": "Tenant is aware and has notice that Landlord granted an exclusive use to another Tenant; and Tenant shall be prohibited from providing medical care and coordination services related to such medical services.",
        "tenant_insurance_requirement": "Tenant shall pay for and maintain commercial general liability insurance with broad form property damage and contractual liability endorsements... with a combined single limit of not less than $2,000,000, and a deductible of not more than $10,000... Landlord may also require Tenant to obtain and maintain business income coverage for at least six (6) months, business auto liability coverage, and, if applicable to Tenant's Permitted Use, liquor liability insurance and/or warehouseman's coverage.",
        "security_deposit": 5391.22,
        "sublease_assignment": "Tenant shall not assign, sublet, mortgage, encumber or otherwise transfer any interest in this Lease or any part of the Premises, without first obtaining Landlord's written consent, which shall not be unreasonably withheld.",
        "hvac": "Tenant shall perform routine HVAC maintenance bi-annually during the Lease term by a certified, licensed, bonded, and insured HVAC contractor.",
        "tenant_repair_requirements": "Tenant shall, at its sole expense, maintain the entire Premises in good condition and promptly make all non-structural repairs and replacements necessary to keep the Premises safe and in good condition, including all HVAC components and other utilities and systems to the extent exclusively serving the Premises. Tenant shall be responsible, at its sole cost, for all normal maintenance and repair of the interior of the Premises, including but not limited to maintaining, repairing, and replacing all windows and doors of the Premises. Tenant shall...",
        "landlord_repair_requirements": "Landlord shall maintain and repair utilities and systems to the extent serving the the Building structure, foundation, subfloor, exterior walls, roof structure and surface, and HVAC components and other utilities and systems serving more than just the Premises, and the Common Areas, the costs of which shall be included as an Operating Cost.",
        "utilities_and_services": "Landlord shall provide janitorial service to the Building, the cost of which shall also be included in Operating Costs, but not to the Tenant's Premises...Tenant shall furnish all other utilities (including, but not limited to, telephone, Internet, and cable service if available) and other services which Tenant requires with respect to the Premises, and shall pay, at Tenant's sole expense, the cost of all utilities separately metered to the Premises, and of all other utilities and other services which Tenant requires with respect to the Premises, except those to be provided by Landlord and included in Operating Expenses as described above."
      }
};

// Define a GET route to retrieve data by abstract ID(s)
app.get('/api/:abstractIds', (req, res) => {
    let abstractIds = req.params.abstractIds.trim().split(','); // Split IDs by comma
    
    console.log("Requested abstract IDs:", abstractIds);
    console.log("Available abstract IDs:", Object.keys(dummyData));
    
    let responseData = {};

    // Loop through each abstract ID
    abstractIds.forEach(abstractId => {
        abstractId = abstractId.trim();
        // Check if the abstract ID exists in the dummy data
        if (dummyData.hasOwnProperty(abstractId)) {
            // If found, add data to response object
            responseData[abstractId] = dummyData[abstractId];
        } else {
            // If not found, add an error message to response object
            responseData[abstractId] = { error: "Abstract ID not found" };
        }
    });

    // Return the response object
    res.json(responseData);
});

// Start the server on port 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
