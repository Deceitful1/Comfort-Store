function CartIcon({className}) {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
  
        <path d="M2 3h2l2.4 12.1a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.7L22 7H6" />
      </svg>
    );
  }
  
  export default CartIcon;