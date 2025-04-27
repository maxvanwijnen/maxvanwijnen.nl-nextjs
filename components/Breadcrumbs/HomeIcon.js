export default function HomeIcon({ size = 18, color = '#263159', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline', verticalAlign: 'middle', ...style }}
    >
      <path d="M3 10.5L12 4L21 10.5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V10.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 21V14H15V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
