import UserProfile from '../components/profile/user-profile';
// import { unstable_getServerSession } from 'next-auth/next';

function ProfilePage() {
  return <UserProfile />
  // return <p>Profile</p>;
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await unstable_getServerSession(
//         context.req,
//         context.res,
//         authOptions
//       ),
//     },
//   }
// }

export default ProfilePage;