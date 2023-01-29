export type jQueryDeferred<T> = {
	then<U>( onFulfill: ( value: T ) => U, onReject?: ( error: any ) => U ): jQueryDeferred<U>;
};

export type ExtendedWindow = Window & {
	$e: {
		run: ( command: string, args?: object ) => unknown;
		route: ( route: string ) => void;
		routes: {
			isPartOf: ( route: string ) => boolean;
		}
	},
}