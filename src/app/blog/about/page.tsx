export default function Page() {
  return (
    <>
      <h1 className="text-purple-800">About</h1>
      <p>
        Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
        nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus
        pharetra, ac porttitor orci.
      </p>
    </>
  );
}

//src/app/page.tsx or any page

// import sql from "@/app/lib/db";

// export default async function Page() {
//   const users = await sql`SELECT * FROM users`;

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }
