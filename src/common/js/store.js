export function saveToLocal(id, key, value) {
	let user = window.localStorage.__user__;
	if (!user) {
		user = {};
		user[id] = {};
	} else {
		user = JSON.parse(user);
		if (!user[id]) {
			user[id] = {};
		}
	}
	user[id][key] = value;
	window.localStorage.__user__ = JSON.stringify(user);
};

export function loadFromLocal(id, key, def) {
	let user = window.localStorage.__user__;
	if (!user) {
		return def;
	}
	user = JSON.parse(user)[id];
	if (!user) {
		return def;
	}
	let ret = user[key];
	return ret || def;
};
