# Form Submissions Documentation for GoHighLevel CRM Integration

This document outlines all form submissions across the Anchor Commercial Capital website that will be integrated with GoHighLevel CRM for lead management and tracking.

## Overview

The website contains multiple lead generation forms across different pages, each capturing specific information relevant to different loan types. All forms include TCPA compliance and SMS opt-in functionality.

---

## 1. Main Homepage Contact Form

**Location**: `/` (Homepage)
**Component**: `src/components/ContactSection.tsx`
**Form ID**: `homepage-contact-form`

### Form Fields
- **name** (string, required) - Full Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanType** (string, optional) - Loan Type Selection
  - Options: private-money, bridge-loan, commercial, fix-flip, ground-up, hard-money, conventional, yacht, aircraft, church
- **loanAmount** (string, optional) - Loan Amount Range
  - Options: 100k-500k, 500k-1m, 1m-5m, 5m-10m, 10m+
- **message** (string, optional) - Additional Message

### Lead Tags for GoHighLevel
- `homepage-lead`
- `general-inquiry`
- `loan-type-{loanType}` (if selected)
- `loan-amount-{loanAmount}` (if selected)

### Conversion Tracking
- Google Ads: `AW-CONVERSION_ID/HOMEPAGE_CONVERSION`
- Analytics Event: `form_submit` with category `Lead Generation`

---

## 2. Homepage CTA Form

**Location**: `/` (Homepage)
**Component**: `src/components/CallToAction.tsx`
**Form ID**: `homepage-cta-form`

### Form Fields
- **firstName** (string, required) - First Name
- **lastName** (string, required) - Last Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanAmount** (string, required) - Loan Amount Range
  - Options: 100k-250k, 250k-500k, 500k-1m, 1m-3m, 3m+
- **smsOptIn** (boolean) - SMS Consent

### Lead Tags for GoHighLevel
- `homepage-cta-lead`
- `high-intent-lead`
- `loan-amount-{loanAmount}`
- `sms-opted-in` (if true)

### Conversion Tracking
- Google Ads: `AW-CONVERSION_ID/CTA_CONVERSION`
- Analytics Event: `form_submit` with category `Lead Generation`

---

## 3. Bridge Loan Page Forms

**Location**: `/bridge-loan`
**Components**: Multiple forms on bridge loan page

### 3a. Bridge Loan Qualification Form
**Component**: `src/pages/bridgeloan/components/QualificationForm.tsx`
**Form ID**: `bridge-loan-qualification-form`

#### Form Fields (Multi-step)
**Step 1 - Loan Details:**
- **loanType** (string, required) - Bridge Loan Type
  - Options: Acquisition Bridge, Refinance Bridge, Construction Bridge, Fix & Flip Bridge
- **propertyType** (string, required) - Property Type
  - Options: Office, Retail, Industrial, Multifamily, Mixed-Use, Land/Development
- **loanAmount** (string, required) - Loan Amount
  - Options: 500k-1m, 1m-3m, 3m-10m, 10m-25m, 5m+

**Step 2 - Timeline & Credit:**
- **timeline** (string, required) - Funding Timeline
  - Options: ASAP (< 2 weeks), 2-4 weeks, 1-2 months, Planning stage (2+ months)
- **creditScore** (string, required) - Credit Score Range
  - Options: 750+, 700-749, 650-699, 600-649, <600

**Step 3 - Contact Information:**
- **name** (string, required) - Full Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `bridge-loan-lead`
- `qualified-lead`
- `loan-type-{loanType}`
- `property-type-{propertyType}`
- `loan-amount-{loanAmount}`
- `timeline-{timeline}`
- `credit-score-{creditScore}`
- `sms-opted-in` (if true)

### 3b. Bridge Loan CTA Form
**Component**: `src/pages/bridgeloan/components/CallToAction.tsx`
**Form ID**: `bridge-loan-cta-form`

#### Form Fields
- **firstName** (string, required) - First Name
- **lastName** (string, required) - Last Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanAmount** (string, required) - Loan Amount Range
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `bridge-loan-cta-lead`
- `high-intent-bridge-lead`
- `loan-amount-{loanAmount}`
- `sms-opted-in` (if true)

---

## 4. Commercial Loan Page Forms

**Location**: `/commercial`
**Components**: Multiple forms on commercial loan page

### 4a. Commercial Loan Qualification Form
**Component**: `src/pages/commercial/components/QualificationForm.tsx`
**Form ID**: `commercial-loan-qualification-form`

#### Form Fields (Multi-step)
**Step 1 - Loan Details:**
- **loanType** (string, required) - Commercial Loan Type
  - Options: Purchase Financing, Refinance, Cash-Out Refinance, Construction/Development, Portfolio Financing
- **propertyType** (string, required) - Property Type
  - Options: Multifamily, Office Building, Retail/Shopping, Industrial/Warehouse, Mixed-Use, Hospitality
- **loanAmount** (string, required) - Loan Amount
  - Options: 500k-1m, 1m-3m, 3m-10m, 10m-25m, 25m+

**Step 2 - Timeline & Credit:**
- **timeline** (string, required) - Funding Timeline
  - Options: Within 30 days, 30-60 days, 60-90 days, Planning stage (researching)
- **creditScore** (string, required) - Credit Score Range
  - Options: 750+, 700-749, 650-699, 600-649, <600

**Step 3 - Contact Information:**
- **name** (string, required) - Full Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `commercial-loan-lead`
- `cre-qualified-lead`
- `loan-type-{loanType}`
- `property-type-{propertyType}`
- `loan-amount-{loanAmount}`
- `timeline-{timeline}`
- `credit-score-{creditScore}`
- `sms-opted-in` (if true)

### 4b. Commercial Loan CTA Form
**Component**: `src/pages/commercial/components/CallToAction.tsx`
**Form ID**: `commercial-loan-cta-form`

#### Form Fields
- **firstName** (string, required) - First Name
- **lastName** (string, required) - Last Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanAmount** (string, required) - Loan Amount Range
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `commercial-cta-lead`
- `high-intent-commercial-lead`
- `loan-amount-{loanAmount}`
- `sms-opted-in` (if true)

---

## 5. Hard Money Loan Page Forms

**Location**: `/hard-money`
**Components**: Multiple forms on hard money loan page

### 5a. Hard Money Qualification Form
**Component**: `src/pages/hardmoney/components/QualificationForm.tsx`
**Form ID**: `hard-money-qualification-form`

#### Form Fields (Multi-step)
**Step 1 - Loan Details:**
- **loanType** (string, required) - Hard Money Loan Type
  - Options: Bridge Loan - Cashout, Joint Venture - Rehab, Mezzanine Finance, Bank Workout, Acquisition & Refinance
- **propertyType** (string, required) - Property Type
  - Options: Multifamily, Office Building, Retail/Shopping, Industrial/Warehouse, Mixed-Use, Hospitality
- **loanAmount** (string, required) - Loan Amount
  - Options: 500k-1m, 1m-3m, 3m-10m, 10m-25m, 25m+

**Step 2 - Timeline & Credit:**
- **timeline** (string, required) - Funding Timeline
  - Options: ASAP (7-10 days), 2-3 weeks, 1-2 months, Planning stage (researching)
- **creditScore** (string, required) - Credit Score Range
  - Options: 750+, 700-749, 650-699, 600-649, <600

**Step 3 - Contact Information:**
- **name** (string, required) - Full Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `hard-money-lead`
- `hard-money-qualified-lead`
- `loan-type-{loanType}`
- `property-type-{propertyType}`
- `loan-amount-{loanAmount}`
- `timeline-{timeline}`
- `credit-score-{creditScore}`
- `sms-opted-in` (if true)

### 5b. Hard Money CTA Form
**Component**: `src/pages/hardmoney/components/CallToAction.tsx`
**Form ID**: `hard-money-cta-form`

#### Form Fields
- **firstName** (string, required) - First Name
- **lastName** (string, required) - Last Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanAmount** (string, required) - Loan Amount Range
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `hard-money-cta-lead`
- `high-intent-hard-money-lead`
- `loan-amount-{loanAmount}`
- `sms-opted-in` (if true)

---

## 6. Church Loan Page Forms

**Location**: `/church-loan`
**Components**: Multiple forms on church loan page

### 6a. Church Loan Qualification Form
**Component**: `src/pages/church-loan/components/QualificationForm.tsx`
**Form ID**: `church-loan-qualification-form`

#### Form Fields (Multi-step)
**Step 1 - Loan Details:**
- **loanType** (string, required) - Church Loan Type
  - Options: Property Acquisition, Refinance Notes, Construction/Renovation, Debt Reduction
- **propertyType** (string, required) - Organization Type
  - Options: Church, Synagogue, Charter School, Non-Profit Org, Mixed-Use, Other Religious
- **loanAmount** (string, required) - Loan Amount
  - Options: 500k-1m, 1m-3m, 3m-10m, 10m+

**Step 2 - Timeline & Credit:**
- **timeline** (string, required) - Funding Timeline
  - Options: ASAP (< 30 days), 1-3 months, 3-6 months, Planning stage (researching)
- **creditScore** (string, required) - Credit Score Range
  - Options: 750+, 700-749, 650-699, 600-649, <600

**Step 3 - Contact Information:**
- **name** (string, required) - Full Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `church-loan-lead`
- `religious-organization-lead`
- `loan-type-{loanType}`
- `organization-type-{propertyType}`
- `loan-amount-{loanAmount}`
- `timeline-{timeline}`
- `credit-score-{creditScore}`
- `sms-opted-in` (if true)

### 6b. Church Loan CTA Form
**Component**: `src/pages/church-loan/components/CallToAction.tsx`
**Form ID**: `church-loan-cta-form`

#### Form Fields
- **firstName** (string, required) - First Name
- **lastName** (string, required) - Last Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanAmount** (string, required) - Loan Amount Range
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `church-cta-lead`
- `high-intent-church-lead`
- `loan-amount-{loanAmount}`
- `sms-opted-in` (if true)

---

## 7. Fix & Flip Loan Page Forms

**Location**: `/fix-flip-loans`
**Components**: Multiple forms on fix & flip loan page

### 7a. Fix & Flip Qualification Form
**Component**: `src/pages/fix-flip-loans/components/QualificationForm.tsx`
**Form ID**: `fix-flip-qualification-form`

#### Form Fields (Multi-step)
**Step 1 - Loan Details:**
- **loanType** (string, required) - Fix & Flip Loan Type
  - Options: Fix & Flip Construction, Purchase + Renovation, Refinance + Renovation, Ground-Up Construction
- **propertyType** (string, required) - Property Type
  - Options: Single Family, Duplex/Triplex, Small Multifamily, Condo/Townhome, Mixed-Use, Commercial
- **loanAmount** (string, required) - Loan Amount
  - Options: 100k-250k, 250k-500k, 500k-1m, 1m-3m, 3m+

**Step 2 - Timeline & Credit:**
- **timeline** (string, required) - Funding Timeline
  - Options: ASAP (< 2 weeks), 2-4 weeks, 1-2 months, Planning stage (researching)
- **creditScore** (string, required) - Credit Score Range
  - Options: 750+, 700-749, 650-699, 600-649, <600

**Step 3 - Contact Information:**
- **name** (string, required) - Full Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `fix-flip-lead`
- `real-estate-investor-lead`
- `loan-type-{loanType}`
- `property-type-{propertyType}`
- `loan-amount-{loanAmount}`
- `timeline-{timeline}`
- `credit-score-{creditScore}`
- `sms-opted-in` (if true)

### 7b. Fix & Flip CTA Form
**Component**: `src/pages/fix-flip-loans/components/CallToAction.tsx`
**Form ID**: `fix-flip-cta-form`

#### Form Fields
- **firstName** (string, required) - First Name
- **lastName** (string, required) - Last Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanAmount** (string, required) - Loan Amount Range
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `fix-flip-cta-lead`
- `high-intent-fix-flip-lead`
- `loan-amount-{loanAmount}`
- `sms-opted-in` (if true)

---

## 8. Yacht Financing Page Forms

**Location**: `/yatch-loan`
**Components**: Multiple forms on yacht financing page

### 8a. Yacht Financing Qualification Form
**Component**: `src/pages/yatch-loan/components/QualificationForm.tsx`
**Form ID**: `yacht-financing-qualification-form`

#### Form Fields (Multi-step)
**Step 1 - Yacht Details:**
- **loanType** (string, required) - Financing Type
  - Options: New Yacht Purchase, Pre-Owned Yacht, Yacht Refinancing, Yacht Construction
- **yachtType** (string, required) - Yacht Type
  - Options: Motor Yacht, Sailing Yacht, Sport Fishing, Catamaran, Superyacht, Trawler
- **loanAmount** (string, required) - Financing Amount
  - Options: 500k-1m, 1m-5m, 5m-10m, 10m-25m, 25m-50m, 50m+

**Step 2 - Timeline & Credit:**
- **timeline** (string, required) - Funding Timeline
  - Options: ASAP (< 30 days), 30-60 days, 2-3 months, Planning stage (3+ months)
- **creditScore** (string, required) - Credit Score Range
  - Options: 750+, 700-749, 650-699, 600-649, <600

**Step 3 - Contact Information:**
- **name** (string, required) - Full Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `yacht-financing-lead`
- `marine-financing-lead`
- `financing-type-{loanType}`
- `yacht-type-{yachtType}`
- `loan-amount-{loanAmount}`
- `timeline-{timeline}`
- `credit-score-{creditScore}`
- `sms-opted-in` (if true)

### 8b. Yacht Financing CTA Form
**Component**: `src/pages/yatch-loan/components/CallToAction.tsx`
**Form ID**: `yacht-financing-cta-form`

#### Form Fields
- **firstName** (string, required) - First Name
- **lastName** (string, required) - Last Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanAmount** (string, required) - Financing Amount Range
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `yacht-cta-lead`
- `high-intent-yacht-lead`
- `loan-amount-{loanAmount}`
- `sms-opted-in` (if true)

---

## 9. Ground Up Construction Page Forms

**Location**: `/ground-up-construction`
**Components**: Multiple forms on construction page

### 9a. Construction Qualification Form
**Component**: `src/pages/ground-up-construction/components/QualificationForm.tsx`
**Form ID**: `construction-qualification-form`

#### Form Fields (Multi-step)
**Step 1 - Loan Details:**
- **loanType** (string, required) - Construction Loan Type
  - Options: Ground-Up Construction, Construction-to-Permanent, Spec Home Construction, Custom Home Construction
- **propertyType** (string, required) - Property Type
  - Options: Single Family, Duplex/Triplex, Multifamily, Townhomes, Mixed-Use, Commercial
- **loanAmount** (string, required) - Loan Amount
  - Options: 500k-1m, 1m-5m, 5m-25m, 25m-100m

**Step 2 - Timeline & Credit:**
- **timeline** (string, required) - Funding Timeline
  - Options: ASAP (< 2 weeks), 2-4 weeks, 1-2 months, Planning stage (researching)
- **creditScore** (string, required) - Credit Score Range
  - Options: 750+, 700-749, 650-699, 600-649, <600

**Step 3 - Contact Information:**
- **name** (string, required) - Full Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `construction-loan-lead`
- `ground-up-construction-lead`
- `loan-type-{loanType}`
- `property-type-{propertyType}`
- `loan-amount-{loanAmount}`
- `timeline-{timeline}`
- `credit-score-{creditScore}`
- `sms-opted-in` (if true)

### 9b. Construction CTA Form
**Component**: `src/pages/ground-up-construction/components/CallToAction.tsx`
**Form ID**: `construction-cta-form`

#### Form Fields
- **firstName** (string, required) - First Name
- **lastName** (string, required) - Last Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanAmount** (string, required) - Loan Amount Range
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `construction-cta-lead`
- `high-intent-construction-lead`
- `loan-amount-{loanAmount}`
- `sms-opted-in` (if true)

---

## 10. Aircraft Financing Page Forms

**Location**: `/aircraft-financing`
**Components**: Multiple forms on aircraft financing page

### 10a. Aircraft Financing Qualification Form
**Component**: `src/pages/aircraft-financing/components/QualificationForm.tsx`
**Form ID**: `aircraft-financing-qualification-form`

#### Form Fields (Multi-step)
**Step 1 - Financing Details:**
- **financingType** (string, required) - Financing Type
  - Options: Aircraft Purchase Loan, Aircraft Lease, Refinance Existing Aircraft, Partnership/Fractional
- **aircraftType** (string, required) - Aircraft Type
  - Options: Single Engine, Twin Engine, Turboprop, Light Jet, Mid-Size Jet, Heavy Jet
- **loanAmount** (string, required) - Loan Amount
  - Options: 500k-1m, 1m-2m, 2m-5m, 5m-10m, 10m+

**Step 2 - Aircraft Details:**
- **aircraftYear** (string, optional) - Aircraft Year
- **tailNumber** (string, optional) - Tail Number
- **location** (string, optional) - Aircraft Location
- **timeline** (string, required) - Funding Timeline
  - Options: ASAP (< 2 weeks), 2-4 weeks, 1-2 months, Planning stage (researching)

**Step 3 - Contact Information:**
- **name** (string, required) - Full Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **entity** (string, optional) - Owning Entity
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `aircraft-financing-lead`
- `aviation-financing-lead`
- `financing-type-{financingType}`
- `aircraft-type-{aircraftType}`
- `loan-amount-{loanAmount}`
- `timeline-{timeline}`
- `sms-opted-in` (if true)

### 10b. Aircraft Financing CTA Form
**Component**: `src/pages/aircraft-financing/components/CallToAction.tsx`
**Form ID**: `aircraft-financing-cta-form`

#### Form Fields
- **firstName** (string, required) - First Name
- **lastName** (string, required) - Last Name
- **email** (string, required) - Email Address
- **phone** (string, required) - Phone Number
- **loanAmount** (string, required) - Loan Amount Range
- **aircraftType** (string, required) - Aircraft Type
- **smsOptIn** (boolean) - SMS Consent

#### Lead Tags for GoHighLevel
- `aircraft-cta-lead`
- `high-intent-aircraft-lead`
- `loan-amount-{loanAmount}`
- `aircraft-type-{aircraftType}`
- `sms-opted-in` (if true)

---

## GoHighLevel Integration Requirements

### API Endpoint Structure
All forms should POST to GoHighLevel webhook endpoints with the following structure:

```json
{
  "contact": {
    "firstName": "string",
    "lastName": "string", 
    "email": "string",
    "phone": "string",
    "source": "website-form",
    "tags": ["array", "of", "tags"]
  },
  "customFields": {
    "loanType": "string",
    "propertyType": "string", 
    "loanAmount": "string",
    "timeline": "string",
    "creditScore": "string",
    "smsOptIn": "boolean",
    "formId": "string",
    "pageUrl": "string",
    "utmSource": "string",
    "utmMedium": "string",
    "utmCampaign": "string"
  }
}
```

### Lead Scoring
- **Qualification Forms**: 75 points (multi-step completion indicates high intent)
- **CTA Forms**: 50 points (single-step but high-intent placement)
- **Contact Forms**: 25 points (general inquiry)

### Automation Triggers
1. **Immediate**: Send confirmation email
2. **5 minutes**: Send SMS (if opted in)
3. **1 hour**: Assign to loan officer
4. **24 hours**: Follow-up call if no response
5. **3 days**: Email sequence begins
6. **7 days**: Re-engagement campaign

### Required Custom Fields in GoHighLevel
- `loan_type`
- `property_type`
- `loan_amount`
- `funding_timeline`
- `credit_score_range`
- `sms_opt_in`
- `form_id`
- `page_source`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `lead_score`

### TCPA Compliance Notes
- All forms include TCPA compliance notices
- SMS consent is explicitly captured via checkbox
- Phone consent is captured via form submission
- Opt-out instructions are provided
- All communications must include opt-out mechanisms

### Analytics Integration
- Google Analytics events are fired on form submission
- Google Ads conversion tracking is implemented
- UTM parameters are captured and stored
- Lead source attribution is maintained

---

## Implementation Notes

1. **Form Validation**: All required fields must be validated before submission
2. **Error Handling**: Implement proper error handling for failed submissions
3. **Success States**: Show confirmation messages after successful submission
4. **Lead Deduplication**: Check for existing contacts in GoHighLevel before creating new ones
5. **Data Sanitization**: Clean and validate all input data before sending to CRM
6. **Retry Logic**: Implement retry mechanism for failed API calls
7. **Logging**: Log all form submissions for debugging and analytics

### Security Considerations
- Validate all input data server-side
- Implement rate limiting to prevent spam
- Use HTTPS for all API communications
- Sanitize data to prevent injection attacks
- Implement CAPTCHA for high-volume forms if needed

---

## Testing Checklist

- [ ] All forms submit successfully to GoHighLevel
- [ ] Lead tags are applied correctly
- [ ] Custom fields are populated
- [ ] TCPA compliance is maintained
- [ ] SMS opt-in functionality works
- [ ] Analytics events fire correctly
- [ ] UTM parameters are captured
- [ ] Error handling works properly
- [ ] Success messages display correctly
- [ ] Lead scoring is applied accurately