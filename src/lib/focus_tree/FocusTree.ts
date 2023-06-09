import type FocusTreeSerializerVisitor from "./FocusTreeSerializerVisitor.js";
import type {Focus} from "./types.js";

export default abstract class FocusTree {
	public readonly focuses: readonly Readonly<Focus>[];

	protected constructor({focuses}: {focuses: readonly Readonly<Focus>[]}) {
		this.focuses = focuses;
	}

	public abstract serialize(visitor: FocusTreeSerializerVisitor): string;
}
