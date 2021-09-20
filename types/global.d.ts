type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type AnyFunction = (...args: any[]) => any;
type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
