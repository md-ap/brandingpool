# EmailJS Setup Guide

## Configuración necesaria para EmailJS

### 1. Crear cuenta en EmailJS
- Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Crea una cuenta gratuita

### 2. Configurar Email Service
- En el dashboard, ve a "Email Services"
- Agrega un nuevo servicio (Gmail, Outlook, etc.)
- Guarda el **Service ID**

### 3. Crear Email Template
- Ve a "Email Templates"
- Crea un nuevo template con los siguientes parámetros:
  - `to_name`: Nombre del destinatario
  - `from_name`: Nombre del remitente
  - `from_email`: Email del remitente
  - `phone`: Teléfono
  - `preferred_date`: Fecha preferida
  - `preferred_time`: Hora preferida
  - `contact_method`: Método de contacto
  - `project`: Descripción del proyecto
- Guarda el **Template ID**

### 4. Obtener Public Key
- En el dashboard, ve a "Account" → "API Keys"
- Copia tu **Public Key**

### 5. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto con:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### 6. Ejemplo de Email Template
```html
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Preferred Date: {{preferred_date}}
Preferred Time: {{preferred_time}}
Contact Method: {{contact_method}}
Project: {{project}}
```

### Notas importantes:
- Las variables deben empezar con `NEXT_PUBLIC_` para que sean accesibles en el cliente
- No incluyas el archivo `.env.local` en el repositorio (ya está en .gitignore)
- Para producción en Vercel, configura estas variables en el dashboard de Vercel
