// Define your company details and styles
const company_name = 'Your Company Name';
const company_url = 'https://www.yourcompanywebsite.com';
const company_email = 'contact@yourcompanywebsite.com';
const company_phone = '+1 234 567 8900';
const logo_url = 'https://raw.githubusercontent.com/yourusername/yourrepository/master/path/to/logo.png';
const background_color = '#FFFFFF';
const text_color = '#222222';
const link_color = '#FF0050';

// Create the widget's HTML using the defined variables
const widgetHTML = `
    <div style="padding: 20px; text-align: center; background-color: ${background_color}; color: ${text_color}; border: 1px solid #ddd; box-shadow: 0 1px 4px rgba(0,0,0,0.1);">
        <img src="${logo_url}" alt="${company_name} Logo" style="max-width: 100%; height: auto; margin-bottom: 20px;">
        <h2 style="font-size: 24px; margin-bottom: 15px;">${company_name}</h2>
        <p style="font-size: 16px; margin-bottom: 10px;"><a href="${company_url}" target="_blank" style="text-decoration: none; color: ${link_color};">${company_url}</a></p>
        <p style="font-size: 16px; margin-bottom: 10px;">Email: <a href="mailto:${company_email}" style="text-decoration: none; color: ${link_color};">${company_email}</a></p>
        <p style="font-size: 16px;">Telephone: <a href="tel:${company_phone}" style="text-decoration: none; color: ${link_color};">${company_phone}</a></p>
    </div>
`;

// Insert the widget's HTML into the designated container
document.addEventListener('DOMContentLoaded', function () {
    const widgetContainer = document.getElementById('custom-dashboard-widget');
    if (widgetContainer) {
        widgetContainer.innerHTML = widgetHTML;
    }
});

