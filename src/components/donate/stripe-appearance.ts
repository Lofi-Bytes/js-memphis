export const appearance = {
  // theme: 'none',
  variables: {
    borderRadius: '0.5rem',
    colorBackground: 'rgb(231, 229, 228)',
    colorDanger: 'rgb(239, 68, 68)',
    colorPrimary: '#7e22ce',
    colorText: 'rgb(87, 83, 78)',
    fontFamily: 'proxima-nova, sans-serif',
    fontSizeBase: '1rem',
    spacingUnit: '4.75px'
  },
  rules: {
    ".Tab": {
      borderWidth: "2px",
      boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
    },
    ".Tab--selected": {
      borderWidth: "2px",
      boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
    },
    '.Block': {
      backgroundColor: '#f5f5f4',
      border: '2px solid #e7e5e4'
    },
    '.Label': {
      marginBottom: '.54rem',
      // marginTop: '1rem'
    },
    '.Input': {
      border: 'none',
      borderLeft: '4px solid #d8b4fe',
      boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
      fontSize: '1.125rem',
      letterSpacing: '',
      marginBottom: '1rem',
      outline: 'none'
    },
    '.Input:focus': {
      border: 'none',
      borderLeft: '4px solid #d946ef',
      boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
      outline: 'none'
    },
    '.Input--invalid': {
      border: 'none',
      borderLeft: '4px solid #fca5a5',
      boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
      outline: 'none'
    },
    '.Input--invalid:focus': {
      border: 'none',
      borderLeft: '4px solid #ef4444',
      boxShadow: '0 4px 6px -1px rgb(215, 215, 215), 0 2px 4px -2px rgb(215, 215, 215)',
      outline: 'none'
    }
  }
}
