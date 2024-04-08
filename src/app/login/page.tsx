import dynamic from 'next/dynamic';
const HankoAuth = dynamic(() => import('../components/Hanko'), { ssr: false })

export default function LoginPage() {
 return (
   <HankoAuth />
 );
}
