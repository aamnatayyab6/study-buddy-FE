// import React from "react";
// import { Image } from "react-native";

// const Avatar = (props) => {
//     return <Avatar seed={props.seed} large={props.large} />;
// }

// Avatar.defaultProps = {
//     seed: null,
//     large: false
// };

// function Avatar({ seed, large }: Props) {
// 	{/* useSession so we can use logged in user state */}
// 	const { data: session } = useSession();

// 	return (
// 		/* Rendering an image. */
//         <div
// 			className={`AvatarDiv relative h-10 w-10 rounded-full border-gray-300 bg-slate-200 overflow-hidden dark:ring-4 dark:ring-[#044A42] dark:hover:ring-[#B8E1DD] dark:hover:shadow-lg ${large && "h-20 w-20"}`}
// 		>
// 			<Image
// 				layout='fill'
// 				/* Setting the source of the image to the seed or the user's name, or a placeholder */
//                 src={`https://avatars.dicebear.com/api/bottts/${seed||session?.user?.name}||placeholder.svg`}
// 				alt='avatar'
// 			/>
// 		</div>
// 	);
// }

// export default Avatar;