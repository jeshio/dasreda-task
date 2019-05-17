export default function getSubModuleState(store, moduleName, subModuleName) {
	return store[moduleName][subModuleName];
}
