import { generateUser } from "../dataGen";
export default function user(state = generateUser(), action) {
	return state;
}
