
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Picture
 * 
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>
/**
 * Model PictureViews
 * 
 */
export type PictureViews = $Result.DefaultSelection<Prisma.$PictureViewsPayload>
/**
 * Model PageViews
 * 
 */
export type PageViews = $Result.DefaultSelection<Prisma.$PageViewsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  user: 'user',
  admin: 'admin'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.PictureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pictureViews`: Exposes CRUD operations for the **PictureViews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PictureViews
    * const pictureViews = await prisma.pictureViews.findMany()
    * ```
    */
  get pictureViews(): Prisma.PictureViewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageViews`: Exposes CRUD operations for the **PageViews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageViews
    * const pageViews = await prisma.pageViews.findMany()
    * ```
    */
  get pageViews(): Prisma.PageViewsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Picture: 'Picture',
    PictureViews: 'PictureViews',
    PageViews: 'PageViews'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "picture" | "pictureViews" | "pageViews"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Picture: {
        payload: Prisma.$PicturePayload<ExtArgs>
        fields: Prisma.PictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PictureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PictureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findFirst: {
            args: Prisma.PictureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PictureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findMany: {
            args: Prisma.PictureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          create: {
            args: Prisma.PictureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          createMany: {
            args: Prisma.PictureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PictureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          delete: {
            args: Prisma.PictureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          update: {
            args: Prisma.PictureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          deleteMany: {
            args: Prisma.PictureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PictureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PictureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          upsert: {
            args: Prisma.PictureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePicture>
          }
          groupBy: {
            args: Prisma.PictureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PictureCountArgs<ExtArgs>
            result: $Utils.Optional<PictureCountAggregateOutputType> | number
          }
        }
      }
      PictureViews: {
        payload: Prisma.$PictureViewsPayload<ExtArgs>
        fields: Prisma.PictureViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PictureViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PictureViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload>
          }
          findFirst: {
            args: Prisma.PictureViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PictureViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload>
          }
          findMany: {
            args: Prisma.PictureViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload>[]
          }
          create: {
            args: Prisma.PictureViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload>
          }
          createMany: {
            args: Prisma.PictureViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PictureViewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload>[]
          }
          delete: {
            args: Prisma.PictureViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload>
          }
          update: {
            args: Prisma.PictureViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload>
          }
          deleteMany: {
            args: Prisma.PictureViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PictureViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PictureViewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload>[]
          }
          upsert: {
            args: Prisma.PictureViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PictureViewsPayload>
          }
          aggregate: {
            args: Prisma.PictureViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePictureViews>
          }
          groupBy: {
            args: Prisma.PictureViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PictureViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PictureViewsCountArgs<ExtArgs>
            result: $Utils.Optional<PictureViewsCountAggregateOutputType> | number
          }
        }
      }
      PageViews: {
        payload: Prisma.$PageViewsPayload<ExtArgs>
        fields: Prisma.PageViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload>
          }
          findFirst: {
            args: Prisma.PageViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload>
          }
          findMany: {
            args: Prisma.PageViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload>[]
          }
          create: {
            args: Prisma.PageViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload>
          }
          createMany: {
            args: Prisma.PageViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageViewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload>[]
          }
          delete: {
            args: Prisma.PageViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload>
          }
          update: {
            args: Prisma.PageViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload>
          }
          deleteMany: {
            args: Prisma.PageViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageViewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload>[]
          }
          upsert: {
            args: Prisma.PageViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewsPayload>
          }
          aggregate: {
            args: Prisma.PageViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageViews>
          }
          groupBy: {
            args: Prisma.PageViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageViewsCountArgs<ExtArgs>
            result: $Utils.Optional<PageViewsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    picture?: PictureOmit
    pictureViews?: PictureViewsOmit
    pageViews?: PageViewsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pageViews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageViews?: boolean | UserCountOutputTypeCountPageViewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPageViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageViewsWhereInput
  }


  /**
   * Count Type PictureCountOutputType
   */

  export type PictureCountOutputType = {
    views: number
  }

  export type PictureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | PictureCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * PictureCountOutputType without action
   */
  export type PictureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureCountOutputType
     */
    select?: PictureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PictureCountOutputType without action
   */
  export type PictureCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureViewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    views: number | null
  }

  export type UserSumAggregateOutputType = {
    views: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    views: number | null
    lastSeen: Date | null
    type: $Enums.UserType | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    views: number | null
    lastSeen: Date | null
    type: $Enums.UserType | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    views: number
    lastSeen: number
    type: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    views?: true
  }

  export type UserSumAggregateInputType = {
    views?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    views?: true
    lastSeen?: true
    type?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    views?: true
    lastSeen?: true
    type?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    views?: true
    lastSeen?: true
    type?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    views: number
    lastSeen: Date
    type: $Enums.UserType
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    views?: boolean
    lastSeen?: boolean
    type?: boolean
    pageViews?: boolean | User$pageViewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    views?: boolean
    lastSeen?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    views?: boolean
    lastSeen?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    views?: boolean
    lastSeen?: boolean
    type?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "views" | "lastSeen" | "type", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageViews?: boolean | User$pageViewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pageViews: Prisma.$PageViewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      views: number
      lastSeen: Date
      type: $Enums.UserType
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pageViews<T extends User$pageViewsArgs<ExtArgs> = {}>(args?: Subset<T, User$pageViewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly views: FieldRef<"User", 'Int'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly type: FieldRef<"User", 'UserType'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pageViews
   */
  export type User$pageViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    where?: PageViewsWhereInput
    orderBy?: PageViewsOrderByWithRelationInput | PageViewsOrderByWithRelationInput[]
    cursor?: PageViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageViewsScalarFieldEnum | PageViewsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type PictureSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type PictureMinAggregateOutputType = {
    id: string | null
    author: string | null
    width: number | null
    height: number | null
    url: string | null
    download_url: string | null
    name: string | null
  }

  export type PictureMaxAggregateOutputType = {
    id: string | null
    author: string | null
    width: number | null
    height: number | null
    url: string | null
    download_url: string | null
    name: string | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    author: number
    width: number
    height: number
    url: number
    download_url: number
    name: number
    _all: number
  }


  export type PictureAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type PictureSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type PictureMinAggregateInputType = {
    id?: true
    author?: true
    width?: true
    height?: true
    url?: true
    download_url?: true
    name?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    author?: true
    width?: true
    height?: true
    url?: true
    download_url?: true
    name?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    author?: true
    width?: true
    height?: true
    url?: true
    download_url?: true
    name?: true
    _all?: true
  }

  export type PictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Picture to aggregate.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pictures
    **/
    _count?: true | PictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PictureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PictureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureMaxAggregateInputType
  }

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>
  }




  export type PictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithAggregationInput | PictureOrderByWithAggregationInput[]
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum
    having?: PictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureCountAggregateInputType | true
    _avg?: PictureAvgAggregateInputType
    _sum?: PictureSumAggregateInputType
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    id: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
    name: string
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  type GetPictureGroupByPayload<T extends PictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>
        }
      >
    >


  export type PictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    width?: boolean
    height?: boolean
    url?: boolean
    download_url?: boolean
    name?: boolean
    views?: boolean | Picture$viewsArgs<ExtArgs>
    _count?: boolean | PictureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    width?: boolean
    height?: boolean
    url?: boolean
    download_url?: boolean
    name?: boolean
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    width?: boolean
    height?: boolean
    url?: boolean
    download_url?: boolean
    name?: boolean
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    id?: boolean
    author?: boolean
    width?: boolean
    height?: boolean
    url?: boolean
    download_url?: boolean
    name?: boolean
  }

  export type PictureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author" | "width" | "height" | "url" | "download_url" | "name", ExtArgs["result"]["picture"]>
  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | Picture$viewsArgs<ExtArgs>
    _count?: boolean | PictureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PictureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      views: Prisma.$PictureViewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author: string
      width: number
      height: number
      url: string
      download_url: string
      name: string
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }

  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface PictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Picture'], meta: { name: 'Picture' } }
    /**
     * Find zero or one Picture that matches the filter.
     * @param {PictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PictureFindUniqueArgs>(args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Picture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs>(args: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PictureFindFirstArgs>(args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs>(args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pictureWithIdOnly = await prisma.picture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PictureFindManyArgs>(args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Picture.
     * @param {PictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     * 
     */
    create<T extends PictureCreateArgs>(args: SelectSubset<T, PictureCreateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pictures.
     * @param {PictureCreateManyArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PictureCreateManyArgs>(args?: SelectSubset<T, PictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pictures and returns the data saved in the database.
     * @param {PictureCreateManyAndReturnArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PictureCreateManyAndReturnArgs>(args?: SelectSubset<T, PictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Picture.
     * @param {PictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     * 
     */
    delete<T extends PictureDeleteArgs>(args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Picture.
     * @param {PictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PictureUpdateArgs>(args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pictures.
     * @param {PictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PictureDeleteManyArgs>(args?: SelectSubset<T, PictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PictureUpdateManyArgs>(args: SelectSubset<T, PictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures and returns the data updated in the database.
     * @param {PictureUpdateManyAndReturnArgs} args - Arguments to update many Pictures.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PictureUpdateManyAndReturnArgs>(args: SelectSubset<T, PictureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Picture.
     * @param {PictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
     */
    upsert<T extends PictureUpsertArgs>(args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends PictureCountArgs>(
      args?: Subset<T, PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PictureAggregateArgs>(args: Subset<T, PictureAggregateArgs>): Prisma.PrismaPromise<GetPictureAggregateType<T>>

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureGroupByArgs['orderBy'] }
        : { orderBy?: PictureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Picture model
   */
  readonly fields: PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    views<T extends Picture$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Picture$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Picture model
   */
  interface PictureFieldRefs {
    readonly id: FieldRef<"Picture", 'String'>
    readonly author: FieldRef<"Picture", 'String'>
    readonly width: FieldRef<"Picture", 'Int'>
    readonly height: FieldRef<"Picture", 'Int'>
    readonly url: FieldRef<"Picture", 'String'>
    readonly download_url: FieldRef<"Picture", 'String'>
    readonly name: FieldRef<"Picture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Picture findUnique
   */
  export type PictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findUniqueOrThrow
   */
  export type PictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findFirst
   */
  export type PictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findFirstOrThrow
   */
  export type PictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findMany
   */
  export type PictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture create
   */
  export type PictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>
  }

  /**
   * Picture createMany
   */
  export type PictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Picture createManyAndReturn
   */
  export type PictureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Picture update
   */
  export type PictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to update a Picture.
     */
    data: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
    /**
     * Choose, which Picture to update.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture updateMany
   */
  export type PictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
  }

  /**
   * Picture updateManyAndReturn
   */
  export type PictureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
  }

  /**
   * Picture upsert
   */
  export type PictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The filter to search for the Picture to update in case it exists.
     */
    where: PictureWhereUniqueInput
    /**
     * In case the Picture found by the `where` argument doesn't exist, create a new Picture with this data.
     */
    create: XOR<PictureCreateInput, PictureUncheckedCreateInput>
    /**
     * In case the Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
  }

  /**
   * Picture delete
   */
  export type PictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture deleteMany
   */
  export type PictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to delete
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to delete.
     */
    limit?: number
  }

  /**
   * Picture.views
   */
  export type Picture$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    where?: PictureViewsWhereInput
    orderBy?: PictureViewsOrderByWithRelationInput | PictureViewsOrderByWithRelationInput[]
    cursor?: PictureViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureViewsScalarFieldEnum | PictureViewsScalarFieldEnum[]
  }

  /**
   * Picture without action
   */
  export type PictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
  }


  /**
   * Model PictureViews
   */

  export type AggregatePictureViews = {
    _count: PictureViewsCountAggregateOutputType | null
    _min: PictureViewsMinAggregateOutputType | null
    _max: PictureViewsMaxAggregateOutputType | null
  }

  export type PictureViewsMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    pictureId: string | null
  }

  export type PictureViewsMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    pictureId: string | null
  }

  export type PictureViewsCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    pictureId: number
    _all: number
  }


  export type PictureViewsMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    pictureId?: true
  }

  export type PictureViewsMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    pictureId?: true
  }

  export type PictureViewsCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    pictureId?: true
    _all?: true
  }

  export type PictureViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PictureViews to aggregate.
     */
    where?: PictureViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PictureViews to fetch.
     */
    orderBy?: PictureViewsOrderByWithRelationInput | PictureViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PictureViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PictureViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PictureViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PictureViews
    **/
    _count?: true | PictureViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureViewsMaxAggregateInputType
  }

  export type GetPictureViewsAggregateType<T extends PictureViewsAggregateArgs> = {
        [P in keyof T & keyof AggregatePictureViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePictureViews[P]>
      : GetScalarType<T[P], AggregatePictureViews[P]>
  }




  export type PictureViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureViewsWhereInput
    orderBy?: PictureViewsOrderByWithAggregationInput | PictureViewsOrderByWithAggregationInput[]
    by: PictureViewsScalarFieldEnum[] | PictureViewsScalarFieldEnum
    having?: PictureViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureViewsCountAggregateInputType | true
    _min?: PictureViewsMinAggregateInputType
    _max?: PictureViewsMaxAggregateInputType
  }

  export type PictureViewsGroupByOutputType = {
    id: string
    sessionId: string
    userId: string | null
    pictureId: string
    _count: PictureViewsCountAggregateOutputType | null
    _min: PictureViewsMinAggregateOutputType | null
    _max: PictureViewsMaxAggregateOutputType | null
  }

  type GetPictureViewsGroupByPayload<T extends PictureViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureViewsGroupByOutputType[P]>
            : GetScalarType<T[P], PictureViewsGroupByOutputType[P]>
        }
      >
    >


  export type PictureViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    pictureId?: boolean
    picture?: boolean | PictureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pictureViews"]>

  export type PictureViewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    pictureId?: boolean
    picture?: boolean | PictureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pictureViews"]>

  export type PictureViewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    pictureId?: boolean
    picture?: boolean | PictureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pictureViews"]>

  export type PictureViewsSelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    pictureId?: boolean
  }

  export type PictureViewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "userId" | "pictureId", ExtArgs["result"]["pictureViews"]>
  export type PictureViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    picture?: boolean | PictureDefaultArgs<ExtArgs>
  }
  export type PictureViewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    picture?: boolean | PictureDefaultArgs<ExtArgs>
  }
  export type PictureViewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    picture?: boolean | PictureDefaultArgs<ExtArgs>
  }

  export type $PictureViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PictureViews"
    objects: {
      picture: Prisma.$PicturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      userId: string | null
      pictureId: string
    }, ExtArgs["result"]["pictureViews"]>
    composites: {}
  }

  type PictureViewsGetPayload<S extends boolean | null | undefined | PictureViewsDefaultArgs> = $Result.GetResult<Prisma.$PictureViewsPayload, S>

  type PictureViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PictureViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PictureViewsCountAggregateInputType | true
    }

  export interface PictureViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PictureViews'], meta: { name: 'PictureViews' } }
    /**
     * Find zero or one PictureViews that matches the filter.
     * @param {PictureViewsFindUniqueArgs} args - Arguments to find a PictureViews
     * @example
     * // Get one PictureViews
     * const pictureViews = await prisma.pictureViews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PictureViewsFindUniqueArgs>(args: SelectSubset<T, PictureViewsFindUniqueArgs<ExtArgs>>): Prisma__PictureViewsClient<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PictureViews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PictureViewsFindUniqueOrThrowArgs} args - Arguments to find a PictureViews
     * @example
     * // Get one PictureViews
     * const pictureViews = await prisma.pictureViews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PictureViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, PictureViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PictureViewsClient<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PictureViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureViewsFindFirstArgs} args - Arguments to find a PictureViews
     * @example
     * // Get one PictureViews
     * const pictureViews = await prisma.pictureViews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PictureViewsFindFirstArgs>(args?: SelectSubset<T, PictureViewsFindFirstArgs<ExtArgs>>): Prisma__PictureViewsClient<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PictureViews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureViewsFindFirstOrThrowArgs} args - Arguments to find a PictureViews
     * @example
     * // Get one PictureViews
     * const pictureViews = await prisma.pictureViews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PictureViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, PictureViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PictureViewsClient<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PictureViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PictureViews
     * const pictureViews = await prisma.pictureViews.findMany()
     * 
     * // Get first 10 PictureViews
     * const pictureViews = await prisma.pictureViews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pictureViewsWithIdOnly = await prisma.pictureViews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PictureViewsFindManyArgs>(args?: SelectSubset<T, PictureViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PictureViews.
     * @param {PictureViewsCreateArgs} args - Arguments to create a PictureViews.
     * @example
     * // Create one PictureViews
     * const PictureViews = await prisma.pictureViews.create({
     *   data: {
     *     // ... data to create a PictureViews
     *   }
     * })
     * 
     */
    create<T extends PictureViewsCreateArgs>(args: SelectSubset<T, PictureViewsCreateArgs<ExtArgs>>): Prisma__PictureViewsClient<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PictureViews.
     * @param {PictureViewsCreateManyArgs} args - Arguments to create many PictureViews.
     * @example
     * // Create many PictureViews
     * const pictureViews = await prisma.pictureViews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PictureViewsCreateManyArgs>(args?: SelectSubset<T, PictureViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PictureViews and returns the data saved in the database.
     * @param {PictureViewsCreateManyAndReturnArgs} args - Arguments to create many PictureViews.
     * @example
     * // Create many PictureViews
     * const pictureViews = await prisma.pictureViews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PictureViews and only return the `id`
     * const pictureViewsWithIdOnly = await prisma.pictureViews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PictureViewsCreateManyAndReturnArgs>(args?: SelectSubset<T, PictureViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PictureViews.
     * @param {PictureViewsDeleteArgs} args - Arguments to delete one PictureViews.
     * @example
     * // Delete one PictureViews
     * const PictureViews = await prisma.pictureViews.delete({
     *   where: {
     *     // ... filter to delete one PictureViews
     *   }
     * })
     * 
     */
    delete<T extends PictureViewsDeleteArgs>(args: SelectSubset<T, PictureViewsDeleteArgs<ExtArgs>>): Prisma__PictureViewsClient<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PictureViews.
     * @param {PictureViewsUpdateArgs} args - Arguments to update one PictureViews.
     * @example
     * // Update one PictureViews
     * const pictureViews = await prisma.pictureViews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PictureViewsUpdateArgs>(args: SelectSubset<T, PictureViewsUpdateArgs<ExtArgs>>): Prisma__PictureViewsClient<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PictureViews.
     * @param {PictureViewsDeleteManyArgs} args - Arguments to filter PictureViews to delete.
     * @example
     * // Delete a few PictureViews
     * const { count } = await prisma.pictureViews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PictureViewsDeleteManyArgs>(args?: SelectSubset<T, PictureViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PictureViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PictureViews
     * const pictureViews = await prisma.pictureViews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PictureViewsUpdateManyArgs>(args: SelectSubset<T, PictureViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PictureViews and returns the data updated in the database.
     * @param {PictureViewsUpdateManyAndReturnArgs} args - Arguments to update many PictureViews.
     * @example
     * // Update many PictureViews
     * const pictureViews = await prisma.pictureViews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PictureViews and only return the `id`
     * const pictureViewsWithIdOnly = await prisma.pictureViews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PictureViewsUpdateManyAndReturnArgs>(args: SelectSubset<T, PictureViewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PictureViews.
     * @param {PictureViewsUpsertArgs} args - Arguments to update or create a PictureViews.
     * @example
     * // Update or create a PictureViews
     * const pictureViews = await prisma.pictureViews.upsert({
     *   create: {
     *     // ... data to create a PictureViews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PictureViews we want to update
     *   }
     * })
     */
    upsert<T extends PictureViewsUpsertArgs>(args: SelectSubset<T, PictureViewsUpsertArgs<ExtArgs>>): Prisma__PictureViewsClient<$Result.GetResult<Prisma.$PictureViewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PictureViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureViewsCountArgs} args - Arguments to filter PictureViews to count.
     * @example
     * // Count the number of PictureViews
     * const count = await prisma.pictureViews.count({
     *   where: {
     *     // ... the filter for the PictureViews we want to count
     *   }
     * })
    **/
    count<T extends PictureViewsCountArgs>(
      args?: Subset<T, PictureViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PictureViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PictureViewsAggregateArgs>(args: Subset<T, PictureViewsAggregateArgs>): Prisma.PrismaPromise<GetPictureViewsAggregateType<T>>

    /**
     * Group by PictureViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureViewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PictureViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureViewsGroupByArgs['orderBy'] }
        : { orderBy?: PictureViewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PictureViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PictureViews model
   */
  readonly fields: PictureViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PictureViews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    picture<T extends PictureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PictureDefaultArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PictureViews model
   */
  interface PictureViewsFieldRefs {
    readonly id: FieldRef<"PictureViews", 'String'>
    readonly sessionId: FieldRef<"PictureViews", 'String'>
    readonly userId: FieldRef<"PictureViews", 'String'>
    readonly pictureId: FieldRef<"PictureViews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PictureViews findUnique
   */
  export type PictureViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    /**
     * Filter, which PictureViews to fetch.
     */
    where: PictureViewsWhereUniqueInput
  }

  /**
   * PictureViews findUniqueOrThrow
   */
  export type PictureViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    /**
     * Filter, which PictureViews to fetch.
     */
    where: PictureViewsWhereUniqueInput
  }

  /**
   * PictureViews findFirst
   */
  export type PictureViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    /**
     * Filter, which PictureViews to fetch.
     */
    where?: PictureViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PictureViews to fetch.
     */
    orderBy?: PictureViewsOrderByWithRelationInput | PictureViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PictureViews.
     */
    cursor?: PictureViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PictureViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PictureViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PictureViews.
     */
    distinct?: PictureViewsScalarFieldEnum | PictureViewsScalarFieldEnum[]
  }

  /**
   * PictureViews findFirstOrThrow
   */
  export type PictureViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    /**
     * Filter, which PictureViews to fetch.
     */
    where?: PictureViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PictureViews to fetch.
     */
    orderBy?: PictureViewsOrderByWithRelationInput | PictureViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PictureViews.
     */
    cursor?: PictureViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PictureViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PictureViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PictureViews.
     */
    distinct?: PictureViewsScalarFieldEnum | PictureViewsScalarFieldEnum[]
  }

  /**
   * PictureViews findMany
   */
  export type PictureViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    /**
     * Filter, which PictureViews to fetch.
     */
    where?: PictureViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PictureViews to fetch.
     */
    orderBy?: PictureViewsOrderByWithRelationInput | PictureViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PictureViews.
     */
    cursor?: PictureViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PictureViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PictureViews.
     */
    skip?: number
    distinct?: PictureViewsScalarFieldEnum | PictureViewsScalarFieldEnum[]
  }

  /**
   * PictureViews create
   */
  export type PictureViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a PictureViews.
     */
    data: XOR<PictureViewsCreateInput, PictureViewsUncheckedCreateInput>
  }

  /**
   * PictureViews createMany
   */
  export type PictureViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PictureViews.
     */
    data: PictureViewsCreateManyInput | PictureViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PictureViews createManyAndReturn
   */
  export type PictureViewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * The data used to create many PictureViews.
     */
    data: PictureViewsCreateManyInput | PictureViewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PictureViews update
   */
  export type PictureViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a PictureViews.
     */
    data: XOR<PictureViewsUpdateInput, PictureViewsUncheckedUpdateInput>
    /**
     * Choose, which PictureViews to update.
     */
    where: PictureViewsWhereUniqueInput
  }

  /**
   * PictureViews updateMany
   */
  export type PictureViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PictureViews.
     */
    data: XOR<PictureViewsUpdateManyMutationInput, PictureViewsUncheckedUpdateManyInput>
    /**
     * Filter which PictureViews to update
     */
    where?: PictureViewsWhereInput
    /**
     * Limit how many PictureViews to update.
     */
    limit?: number
  }

  /**
   * PictureViews updateManyAndReturn
   */
  export type PictureViewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * The data used to update PictureViews.
     */
    data: XOR<PictureViewsUpdateManyMutationInput, PictureViewsUncheckedUpdateManyInput>
    /**
     * Filter which PictureViews to update
     */
    where?: PictureViewsWhereInput
    /**
     * Limit how many PictureViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PictureViews upsert
   */
  export type PictureViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the PictureViews to update in case it exists.
     */
    where: PictureViewsWhereUniqueInput
    /**
     * In case the PictureViews found by the `where` argument doesn't exist, create a new PictureViews with this data.
     */
    create: XOR<PictureViewsCreateInput, PictureViewsUncheckedCreateInput>
    /**
     * In case the PictureViews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureViewsUpdateInput, PictureViewsUncheckedUpdateInput>
  }

  /**
   * PictureViews delete
   */
  export type PictureViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
    /**
     * Filter which PictureViews to delete.
     */
    where: PictureViewsWhereUniqueInput
  }

  /**
   * PictureViews deleteMany
   */
  export type PictureViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PictureViews to delete
     */
    where?: PictureViewsWhereInput
    /**
     * Limit how many PictureViews to delete.
     */
    limit?: number
  }

  /**
   * PictureViews without action
   */
  export type PictureViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PictureViews
     */
    select?: PictureViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PictureViews
     */
    omit?: PictureViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureViewsInclude<ExtArgs> | null
  }


  /**
   * Model PageViews
   */

  export type AggregatePageViews = {
    _count: PageViewsCountAggregateOutputType | null
    _min: PageViewsMinAggregateOutputType | null
    _max: PageViewsMaxAggregateOutputType | null
  }

  export type PageViewsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    page: string | null
    viewTime: Date | null
    pictureId: string | null
  }

  export type PageViewsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    page: string | null
    viewTime: Date | null
    pictureId: string | null
  }

  export type PageViewsCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    page: number
    viewTime: number
    pictureId: number
    _all: number
  }


  export type PageViewsMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    page?: true
    viewTime?: true
    pictureId?: true
  }

  export type PageViewsMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    page?: true
    viewTime?: true
    pictureId?: true
  }

  export type PageViewsCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    page?: true
    viewTime?: true
    pictureId?: true
    _all?: true
  }

  export type PageViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageViews to aggregate.
     */
    where?: PageViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewsOrderByWithRelationInput | PageViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageViews
    **/
    _count?: true | PageViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageViewsMaxAggregateInputType
  }

  export type GetPageViewsAggregateType<T extends PageViewsAggregateArgs> = {
        [P in keyof T & keyof AggregatePageViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageViews[P]>
      : GetScalarType<T[P], AggregatePageViews[P]>
  }




  export type PageViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageViewsWhereInput
    orderBy?: PageViewsOrderByWithAggregationInput | PageViewsOrderByWithAggregationInput[]
    by: PageViewsScalarFieldEnum[] | PageViewsScalarFieldEnum
    having?: PageViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageViewsCountAggregateInputType | true
    _min?: PageViewsMinAggregateInputType
    _max?: PageViewsMaxAggregateInputType
  }

  export type PageViewsGroupByOutputType = {
    id: string
    userId: string
    sessionId: string
    page: string
    viewTime: Date
    pictureId: string | null
    _count: PageViewsCountAggregateOutputType | null
    _min: PageViewsMinAggregateOutputType | null
    _max: PageViewsMaxAggregateOutputType | null
  }

  type GetPageViewsGroupByPayload<T extends PageViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageViewsGroupByOutputType[P]>
            : GetScalarType<T[P], PageViewsGroupByOutputType[P]>
        }
      >
    >


  export type PageViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    page?: boolean
    viewTime?: boolean
    pictureId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageViews"]>

  export type PageViewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    page?: boolean
    viewTime?: boolean
    pictureId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageViews"]>

  export type PageViewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    page?: boolean
    viewTime?: boolean
    pictureId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageViews"]>

  export type PageViewsSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    page?: boolean
    viewTime?: boolean
    pictureId?: boolean
  }

  export type PageViewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "page" | "viewTime" | "pictureId", ExtArgs["result"]["pageViews"]>
  export type PageViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PageViewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PageViewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PageViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageViews"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string
      page: string
      viewTime: Date
      pictureId: string | null
    }, ExtArgs["result"]["pageViews"]>
    composites: {}
  }

  type PageViewsGetPayload<S extends boolean | null | undefined | PageViewsDefaultArgs> = $Result.GetResult<Prisma.$PageViewsPayload, S>

  type PageViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageViewsCountAggregateInputType | true
    }

  export interface PageViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageViews'], meta: { name: 'PageViews' } }
    /**
     * Find zero or one PageViews that matches the filter.
     * @param {PageViewsFindUniqueArgs} args - Arguments to find a PageViews
     * @example
     * // Get one PageViews
     * const pageViews = await prisma.pageViews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageViewsFindUniqueArgs>(args: SelectSubset<T, PageViewsFindUniqueArgs<ExtArgs>>): Prisma__PageViewsClient<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageViews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageViewsFindUniqueOrThrowArgs} args - Arguments to find a PageViews
     * @example
     * // Get one PageViews
     * const pageViews = await prisma.pageViews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, PageViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageViewsClient<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsFindFirstArgs} args - Arguments to find a PageViews
     * @example
     * // Get one PageViews
     * const pageViews = await prisma.pageViews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageViewsFindFirstArgs>(args?: SelectSubset<T, PageViewsFindFirstArgs<ExtArgs>>): Prisma__PageViewsClient<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageViews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsFindFirstOrThrowArgs} args - Arguments to find a PageViews
     * @example
     * // Get one PageViews
     * const pageViews = await prisma.pageViews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, PageViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageViewsClient<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageViews
     * const pageViews = await prisma.pageViews.findMany()
     * 
     * // Get first 10 PageViews
     * const pageViews = await prisma.pageViews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageViewsWithIdOnly = await prisma.pageViews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageViewsFindManyArgs>(args?: SelectSubset<T, PageViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageViews.
     * @param {PageViewsCreateArgs} args - Arguments to create a PageViews.
     * @example
     * // Create one PageViews
     * const PageViews = await prisma.pageViews.create({
     *   data: {
     *     // ... data to create a PageViews
     *   }
     * })
     * 
     */
    create<T extends PageViewsCreateArgs>(args: SelectSubset<T, PageViewsCreateArgs<ExtArgs>>): Prisma__PageViewsClient<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageViews.
     * @param {PageViewsCreateManyArgs} args - Arguments to create many PageViews.
     * @example
     * // Create many PageViews
     * const pageViews = await prisma.pageViews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageViewsCreateManyArgs>(args?: SelectSubset<T, PageViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageViews and returns the data saved in the database.
     * @param {PageViewsCreateManyAndReturnArgs} args - Arguments to create many PageViews.
     * @example
     * // Create many PageViews
     * const pageViews = await prisma.pageViews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageViews and only return the `id`
     * const pageViewsWithIdOnly = await prisma.pageViews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageViewsCreateManyAndReturnArgs>(args?: SelectSubset<T, PageViewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageViews.
     * @param {PageViewsDeleteArgs} args - Arguments to delete one PageViews.
     * @example
     * // Delete one PageViews
     * const PageViews = await prisma.pageViews.delete({
     *   where: {
     *     // ... filter to delete one PageViews
     *   }
     * })
     * 
     */
    delete<T extends PageViewsDeleteArgs>(args: SelectSubset<T, PageViewsDeleteArgs<ExtArgs>>): Prisma__PageViewsClient<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageViews.
     * @param {PageViewsUpdateArgs} args - Arguments to update one PageViews.
     * @example
     * // Update one PageViews
     * const pageViews = await prisma.pageViews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageViewsUpdateArgs>(args: SelectSubset<T, PageViewsUpdateArgs<ExtArgs>>): Prisma__PageViewsClient<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageViews.
     * @param {PageViewsDeleteManyArgs} args - Arguments to filter PageViews to delete.
     * @example
     * // Delete a few PageViews
     * const { count } = await prisma.pageViews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageViewsDeleteManyArgs>(args?: SelectSubset<T, PageViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageViews
     * const pageViews = await prisma.pageViews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageViewsUpdateManyArgs>(args: SelectSubset<T, PageViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViews and returns the data updated in the database.
     * @param {PageViewsUpdateManyAndReturnArgs} args - Arguments to update many PageViews.
     * @example
     * // Update many PageViews
     * const pageViews = await prisma.pageViews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageViews and only return the `id`
     * const pageViewsWithIdOnly = await prisma.pageViews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageViewsUpdateManyAndReturnArgs>(args: SelectSubset<T, PageViewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageViews.
     * @param {PageViewsUpsertArgs} args - Arguments to update or create a PageViews.
     * @example
     * // Update or create a PageViews
     * const pageViews = await prisma.pageViews.upsert({
     *   create: {
     *     // ... data to create a PageViews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageViews we want to update
     *   }
     * })
     */
    upsert<T extends PageViewsUpsertArgs>(args: SelectSubset<T, PageViewsUpsertArgs<ExtArgs>>): Prisma__PageViewsClient<$Result.GetResult<Prisma.$PageViewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsCountArgs} args - Arguments to filter PageViews to count.
     * @example
     * // Count the number of PageViews
     * const count = await prisma.pageViews.count({
     *   where: {
     *     // ... the filter for the PageViews we want to count
     *   }
     * })
    **/
    count<T extends PageViewsCountArgs>(
      args?: Subset<T, PageViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageViewsAggregateArgs>(args: Subset<T, PageViewsAggregateArgs>): Prisma.PrismaPromise<GetPageViewsAggregateType<T>>

    /**
     * Group by PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageViewsGroupByArgs['orderBy'] }
        : { orderBy?: PageViewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageViews model
   */
  readonly fields: PageViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageViews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageViews model
   */
  interface PageViewsFieldRefs {
    readonly id: FieldRef<"PageViews", 'String'>
    readonly userId: FieldRef<"PageViews", 'String'>
    readonly sessionId: FieldRef<"PageViews", 'String'>
    readonly page: FieldRef<"PageViews", 'String'>
    readonly viewTime: FieldRef<"PageViews", 'DateTime'>
    readonly pictureId: FieldRef<"PageViews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PageViews findUnique
   */
  export type PageViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    /**
     * Filter, which PageViews to fetch.
     */
    where: PageViewsWhereUniqueInput
  }

  /**
   * PageViews findUniqueOrThrow
   */
  export type PageViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    /**
     * Filter, which PageViews to fetch.
     */
    where: PageViewsWhereUniqueInput
  }

  /**
   * PageViews findFirst
   */
  export type PageViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    /**
     * Filter, which PageViews to fetch.
     */
    where?: PageViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewsOrderByWithRelationInput | PageViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: PageViewsScalarFieldEnum | PageViewsScalarFieldEnum[]
  }

  /**
   * PageViews findFirstOrThrow
   */
  export type PageViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    /**
     * Filter, which PageViews to fetch.
     */
    where?: PageViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewsOrderByWithRelationInput | PageViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: PageViewsScalarFieldEnum | PageViewsScalarFieldEnum[]
  }

  /**
   * PageViews findMany
   */
  export type PageViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    /**
     * Filter, which PageViews to fetch.
     */
    where?: PageViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewsOrderByWithRelationInput | PageViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageViews.
     */
    cursor?: PageViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    distinct?: PageViewsScalarFieldEnum | PageViewsScalarFieldEnum[]
  }

  /**
   * PageViews create
   */
  export type PageViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a PageViews.
     */
    data: XOR<PageViewsCreateInput, PageViewsUncheckedCreateInput>
  }

  /**
   * PageViews createMany
   */
  export type PageViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageViews.
     */
    data: PageViewsCreateManyInput | PageViewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageViews createManyAndReturn
   */
  export type PageViewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * The data used to create many PageViews.
     */
    data: PageViewsCreateManyInput | PageViewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageViews update
   */
  export type PageViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a PageViews.
     */
    data: XOR<PageViewsUpdateInput, PageViewsUncheckedUpdateInput>
    /**
     * Choose, which PageViews to update.
     */
    where: PageViewsWhereUniqueInput
  }

  /**
   * PageViews updateMany
   */
  export type PageViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageViews.
     */
    data: XOR<PageViewsUpdateManyMutationInput, PageViewsUncheckedUpdateManyInput>
    /**
     * Filter which PageViews to update
     */
    where?: PageViewsWhereInput
    /**
     * Limit how many PageViews to update.
     */
    limit?: number
  }

  /**
   * PageViews updateManyAndReturn
   */
  export type PageViewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * The data used to update PageViews.
     */
    data: XOR<PageViewsUpdateManyMutationInput, PageViewsUncheckedUpdateManyInput>
    /**
     * Filter which PageViews to update
     */
    where?: PageViewsWhereInput
    /**
     * Limit how many PageViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageViews upsert
   */
  export type PageViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the PageViews to update in case it exists.
     */
    where: PageViewsWhereUniqueInput
    /**
     * In case the PageViews found by the `where` argument doesn't exist, create a new PageViews with this data.
     */
    create: XOR<PageViewsCreateInput, PageViewsUncheckedCreateInput>
    /**
     * In case the PageViews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageViewsUpdateInput, PageViewsUncheckedUpdateInput>
  }

  /**
   * PageViews delete
   */
  export type PageViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
    /**
     * Filter which PageViews to delete.
     */
    where: PageViewsWhereUniqueInput
  }

  /**
   * PageViews deleteMany
   */
  export type PageViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageViews to delete
     */
    where?: PageViewsWhereInput
    /**
     * Limit how many PageViews to delete.
     */
    limit?: number
  }

  /**
   * PageViews without action
   */
  export type PageViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViews
     */
    select?: PageViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViews
     */
    omit?: PageViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    views: 'views',
    lastSeen: 'lastSeen',
    type: 'type'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    author: 'author',
    width: 'width',
    height: 'height',
    url: 'url',
    download_url: 'download_url',
    name: 'name'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const PictureViewsScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId',
    pictureId: 'pictureId'
  };

  export type PictureViewsScalarFieldEnum = (typeof PictureViewsScalarFieldEnum)[keyof typeof PictureViewsScalarFieldEnum]


  export const PageViewsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    page: 'page',
    viewTime: 'viewTime',
    pictureId: 'pictureId'
  };

  export type PageViewsScalarFieldEnum = (typeof PageViewsScalarFieldEnum)[keyof typeof PageViewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    views?: IntFilter<"User"> | number
    lastSeen?: DateTimeFilter<"User"> | Date | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    pageViews?: PageViewsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    views?: SortOrder
    lastSeen?: SortOrder
    type?: SortOrder
    pageViews?: PageViewsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    views?: IntFilter<"User"> | number
    lastSeen?: DateTimeFilter<"User"> | Date | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    pageViews?: PageViewsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    views?: SortOrder
    lastSeen?: SortOrder
    type?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    views?: IntWithAggregatesFilter<"User"> | number
    lastSeen?: DateTimeWithAggregatesFilter<"User"> | Date | string
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    id?: StringFilter<"Picture"> | string
    author?: StringFilter<"Picture"> | string
    width?: IntFilter<"Picture"> | number
    height?: IntFilter<"Picture"> | number
    url?: StringFilter<"Picture"> | string
    download_url?: StringFilter<"Picture"> | string
    name?: StringFilter<"Picture"> | string
    views?: PictureViewsListRelationFilter
  }

  export type PictureOrderByWithRelationInput = {
    id?: SortOrder
    author?: SortOrder
    width?: SortOrder
    height?: SortOrder
    url?: SortOrder
    download_url?: SortOrder
    name?: SortOrder
    views?: PictureViewsOrderByRelationAggregateInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    author?: StringFilter<"Picture"> | string
    width?: IntFilter<"Picture"> | number
    height?: IntFilter<"Picture"> | number
    url?: StringFilter<"Picture"> | string
    download_url?: StringFilter<"Picture"> | string
    name?: StringFilter<"Picture"> | string
    views?: PictureViewsListRelationFilter
  }, "id">

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder
    author?: SortOrder
    width?: SortOrder
    height?: SortOrder
    url?: SortOrder
    download_url?: SortOrder
    name?: SortOrder
    _count?: PictureCountOrderByAggregateInput
    _avg?: PictureAvgOrderByAggregateInput
    _max?: PictureMaxOrderByAggregateInput
    _min?: PictureMinOrderByAggregateInput
    _sum?: PictureSumOrderByAggregateInput
  }

  export type PictureScalarWhereWithAggregatesInput = {
    AND?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    OR?: PictureScalarWhereWithAggregatesInput[]
    NOT?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Picture"> | string
    author?: StringWithAggregatesFilter<"Picture"> | string
    width?: IntWithAggregatesFilter<"Picture"> | number
    height?: IntWithAggregatesFilter<"Picture"> | number
    url?: StringWithAggregatesFilter<"Picture"> | string
    download_url?: StringWithAggregatesFilter<"Picture"> | string
    name?: StringWithAggregatesFilter<"Picture"> | string
  }

  export type PictureViewsWhereInput = {
    AND?: PictureViewsWhereInput | PictureViewsWhereInput[]
    OR?: PictureViewsWhereInput[]
    NOT?: PictureViewsWhereInput | PictureViewsWhereInput[]
    id?: StringFilter<"PictureViews"> | string
    sessionId?: StringFilter<"PictureViews"> | string
    userId?: StringNullableFilter<"PictureViews"> | string | null
    pictureId?: StringFilter<"PictureViews"> | string
    picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>
  }

  export type PictureViewsOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrderInput | SortOrder
    pictureId?: SortOrder
    picture?: PictureOrderByWithRelationInput
  }

  export type PictureViewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PictureViewsWhereInput | PictureViewsWhereInput[]
    OR?: PictureViewsWhereInput[]
    NOT?: PictureViewsWhereInput | PictureViewsWhereInput[]
    sessionId?: StringFilter<"PictureViews"> | string
    userId?: StringNullableFilter<"PictureViews"> | string | null
    pictureId?: StringFilter<"PictureViews"> | string
    picture?: XOR<PictureScalarRelationFilter, PictureWhereInput>
  }, "id">

  export type PictureViewsOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrderInput | SortOrder
    pictureId?: SortOrder
    _count?: PictureViewsCountOrderByAggregateInput
    _max?: PictureViewsMaxOrderByAggregateInput
    _min?: PictureViewsMinOrderByAggregateInput
  }

  export type PictureViewsScalarWhereWithAggregatesInput = {
    AND?: PictureViewsScalarWhereWithAggregatesInput | PictureViewsScalarWhereWithAggregatesInput[]
    OR?: PictureViewsScalarWhereWithAggregatesInput[]
    NOT?: PictureViewsScalarWhereWithAggregatesInput | PictureViewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PictureViews"> | string
    sessionId?: StringWithAggregatesFilter<"PictureViews"> | string
    userId?: StringNullableWithAggregatesFilter<"PictureViews"> | string | null
    pictureId?: StringWithAggregatesFilter<"PictureViews"> | string
  }

  export type PageViewsWhereInput = {
    AND?: PageViewsWhereInput | PageViewsWhereInput[]
    OR?: PageViewsWhereInput[]
    NOT?: PageViewsWhereInput | PageViewsWhereInput[]
    id?: StringFilter<"PageViews"> | string
    userId?: StringFilter<"PageViews"> | string
    sessionId?: StringFilter<"PageViews"> | string
    page?: StringFilter<"PageViews"> | string
    viewTime?: DateTimeFilter<"PageViews"> | Date | string
    pictureId?: StringNullableFilter<"PageViews"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PageViewsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    page?: SortOrder
    viewTime?: SortOrder
    pictureId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PageViewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PageViewsWhereInput | PageViewsWhereInput[]
    OR?: PageViewsWhereInput[]
    NOT?: PageViewsWhereInput | PageViewsWhereInput[]
    userId?: StringFilter<"PageViews"> | string
    sessionId?: StringFilter<"PageViews"> | string
    page?: StringFilter<"PageViews"> | string
    viewTime?: DateTimeFilter<"PageViews"> | Date | string
    pictureId?: StringNullableFilter<"PageViews"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PageViewsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    page?: SortOrder
    viewTime?: SortOrder
    pictureId?: SortOrderInput | SortOrder
    _count?: PageViewsCountOrderByAggregateInput
    _max?: PageViewsMaxOrderByAggregateInput
    _min?: PageViewsMinOrderByAggregateInput
  }

  export type PageViewsScalarWhereWithAggregatesInput = {
    AND?: PageViewsScalarWhereWithAggregatesInput | PageViewsScalarWhereWithAggregatesInput[]
    OR?: PageViewsScalarWhereWithAggregatesInput[]
    NOT?: PageViewsScalarWhereWithAggregatesInput | PageViewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageViews"> | string
    userId?: StringWithAggregatesFilter<"PageViews"> | string
    sessionId?: StringWithAggregatesFilter<"PageViews"> | string
    page?: StringWithAggregatesFilter<"PageViews"> | string
    viewTime?: DateTimeWithAggregatesFilter<"PageViews"> | Date | string
    pictureId?: StringNullableWithAggregatesFilter<"PageViews"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    views?: number
    lastSeen?: Date | string
    type?: $Enums.UserType
    pageViews?: PageViewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    views?: number
    lastSeen?: Date | string
    type?: $Enums.UserType
    pageViews?: PageViewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    pageViews?: PageViewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    pageViews?: PageViewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    views?: number
    lastSeen?: Date | string
    type?: $Enums.UserType
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type PictureCreateInput = {
    id?: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
    name?: string
    views?: PictureViewsCreateNestedManyWithoutPictureInput
  }

  export type PictureUncheckedCreateInput = {
    id?: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
    name?: string
    views?: PictureViewsUncheckedCreateNestedManyWithoutPictureInput
  }

  export type PictureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    download_url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    views?: PictureViewsUpdateManyWithoutPictureNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    download_url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    views?: PictureViewsUncheckedUpdateManyWithoutPictureNestedInput
  }

  export type PictureCreateManyInput = {
    id?: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
    name?: string
  }

  export type PictureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    download_url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    download_url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PictureViewsCreateInput = {
    id?: string
    sessionId: string
    userId?: string | null
    picture: PictureCreateNestedOneWithoutViewsInput
  }

  export type PictureViewsUncheckedCreateInput = {
    id?: string
    sessionId: string
    userId?: string | null
    pictureId: string
  }

  export type PictureViewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: PictureUpdateOneRequiredWithoutViewsNestedInput
  }

  export type PictureViewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pictureId?: StringFieldUpdateOperationsInput | string
  }

  export type PictureViewsCreateManyInput = {
    id?: string
    sessionId: string
    userId?: string | null
    pictureId: string
  }

  export type PictureViewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureViewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pictureId?: StringFieldUpdateOperationsInput | string
  }

  export type PageViewsCreateInput = {
    id?: string
    sessionId: string
    page: string
    viewTime?: Date | string
    pictureId?: string | null
    user: UserCreateNestedOneWithoutPageViewsInput
  }

  export type PageViewsUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId: string
    page: string
    viewTime?: Date | string
    pictureId?: string | null
  }

  export type PageViewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    viewTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPageViewsNestedInput
  }

  export type PageViewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    viewTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageViewsCreateManyInput = {
    id?: string
    userId: string
    sessionId: string
    page: string
    viewTime?: Date | string
    pictureId?: string | null
  }

  export type PageViewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    viewTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageViewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    viewTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type PageViewsListRelationFilter = {
    every?: PageViewsWhereInput
    some?: PageViewsWhereInput
    none?: PageViewsWhereInput
  }

  export type PageViewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    views?: SortOrder
    lastSeen?: SortOrder
    type?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    views?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    views?: SortOrder
    lastSeen?: SortOrder
    type?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    views?: SortOrder
    lastSeen?: SortOrder
    type?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    views?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type PictureViewsListRelationFilter = {
    every?: PictureViewsWhereInput
    some?: PictureViewsWhereInput
    none?: PictureViewsWhereInput
  }

  export type PictureViewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    width?: SortOrder
    height?: SortOrder
    url?: SortOrder
    download_url?: SortOrder
    name?: SortOrder
  }

  export type PictureAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    width?: SortOrder
    height?: SortOrder
    url?: SortOrder
    download_url?: SortOrder
    name?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    width?: SortOrder
    height?: SortOrder
    url?: SortOrder
    download_url?: SortOrder
    name?: SortOrder
  }

  export type PictureSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PictureScalarRelationFilter = {
    is?: PictureWhereInput
    isNot?: PictureWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PictureViewsCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    pictureId?: SortOrder
  }

  export type PictureViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    pictureId?: SortOrder
  }

  export type PictureViewsMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    pictureId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PageViewsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    page?: SortOrder
    viewTime?: SortOrder
    pictureId?: SortOrder
  }

  export type PageViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    page?: SortOrder
    viewTime?: SortOrder
    pictureId?: SortOrder
  }

  export type PageViewsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    page?: SortOrder
    viewTime?: SortOrder
    pictureId?: SortOrder
  }

  export type PageViewsCreateNestedManyWithoutUserInput = {
    create?: XOR<PageViewsCreateWithoutUserInput, PageViewsUncheckedCreateWithoutUserInput> | PageViewsCreateWithoutUserInput[] | PageViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageViewsCreateOrConnectWithoutUserInput | PageViewsCreateOrConnectWithoutUserInput[]
    createMany?: PageViewsCreateManyUserInputEnvelope
    connect?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
  }

  export type PageViewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PageViewsCreateWithoutUserInput, PageViewsUncheckedCreateWithoutUserInput> | PageViewsCreateWithoutUserInput[] | PageViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageViewsCreateOrConnectWithoutUserInput | PageViewsCreateOrConnectWithoutUserInput[]
    createMany?: PageViewsCreateManyUserInputEnvelope
    connect?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type PageViewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PageViewsCreateWithoutUserInput, PageViewsUncheckedCreateWithoutUserInput> | PageViewsCreateWithoutUserInput[] | PageViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageViewsCreateOrConnectWithoutUserInput | PageViewsCreateOrConnectWithoutUserInput[]
    upsert?: PageViewsUpsertWithWhereUniqueWithoutUserInput | PageViewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PageViewsCreateManyUserInputEnvelope
    set?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
    disconnect?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
    delete?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
    connect?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
    update?: PageViewsUpdateWithWhereUniqueWithoutUserInput | PageViewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PageViewsUpdateManyWithWhereWithoutUserInput | PageViewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PageViewsScalarWhereInput | PageViewsScalarWhereInput[]
  }

  export type PageViewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PageViewsCreateWithoutUserInput, PageViewsUncheckedCreateWithoutUserInput> | PageViewsCreateWithoutUserInput[] | PageViewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageViewsCreateOrConnectWithoutUserInput | PageViewsCreateOrConnectWithoutUserInput[]
    upsert?: PageViewsUpsertWithWhereUniqueWithoutUserInput | PageViewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PageViewsCreateManyUserInputEnvelope
    set?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
    disconnect?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
    delete?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
    connect?: PageViewsWhereUniqueInput | PageViewsWhereUniqueInput[]
    update?: PageViewsUpdateWithWhereUniqueWithoutUserInput | PageViewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PageViewsUpdateManyWithWhereWithoutUserInput | PageViewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PageViewsScalarWhereInput | PageViewsScalarWhereInput[]
  }

  export type PictureViewsCreateNestedManyWithoutPictureInput = {
    create?: XOR<PictureViewsCreateWithoutPictureInput, PictureViewsUncheckedCreateWithoutPictureInput> | PictureViewsCreateWithoutPictureInput[] | PictureViewsUncheckedCreateWithoutPictureInput[]
    connectOrCreate?: PictureViewsCreateOrConnectWithoutPictureInput | PictureViewsCreateOrConnectWithoutPictureInput[]
    createMany?: PictureViewsCreateManyPictureInputEnvelope
    connect?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
  }

  export type PictureViewsUncheckedCreateNestedManyWithoutPictureInput = {
    create?: XOR<PictureViewsCreateWithoutPictureInput, PictureViewsUncheckedCreateWithoutPictureInput> | PictureViewsCreateWithoutPictureInput[] | PictureViewsUncheckedCreateWithoutPictureInput[]
    connectOrCreate?: PictureViewsCreateOrConnectWithoutPictureInput | PictureViewsCreateOrConnectWithoutPictureInput[]
    createMany?: PictureViewsCreateManyPictureInputEnvelope
    connect?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
  }

  export type PictureViewsUpdateManyWithoutPictureNestedInput = {
    create?: XOR<PictureViewsCreateWithoutPictureInput, PictureViewsUncheckedCreateWithoutPictureInput> | PictureViewsCreateWithoutPictureInput[] | PictureViewsUncheckedCreateWithoutPictureInput[]
    connectOrCreate?: PictureViewsCreateOrConnectWithoutPictureInput | PictureViewsCreateOrConnectWithoutPictureInput[]
    upsert?: PictureViewsUpsertWithWhereUniqueWithoutPictureInput | PictureViewsUpsertWithWhereUniqueWithoutPictureInput[]
    createMany?: PictureViewsCreateManyPictureInputEnvelope
    set?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
    disconnect?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
    delete?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
    connect?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
    update?: PictureViewsUpdateWithWhereUniqueWithoutPictureInput | PictureViewsUpdateWithWhereUniqueWithoutPictureInput[]
    updateMany?: PictureViewsUpdateManyWithWhereWithoutPictureInput | PictureViewsUpdateManyWithWhereWithoutPictureInput[]
    deleteMany?: PictureViewsScalarWhereInput | PictureViewsScalarWhereInput[]
  }

  export type PictureViewsUncheckedUpdateManyWithoutPictureNestedInput = {
    create?: XOR<PictureViewsCreateWithoutPictureInput, PictureViewsUncheckedCreateWithoutPictureInput> | PictureViewsCreateWithoutPictureInput[] | PictureViewsUncheckedCreateWithoutPictureInput[]
    connectOrCreate?: PictureViewsCreateOrConnectWithoutPictureInput | PictureViewsCreateOrConnectWithoutPictureInput[]
    upsert?: PictureViewsUpsertWithWhereUniqueWithoutPictureInput | PictureViewsUpsertWithWhereUniqueWithoutPictureInput[]
    createMany?: PictureViewsCreateManyPictureInputEnvelope
    set?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
    disconnect?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
    delete?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
    connect?: PictureViewsWhereUniqueInput | PictureViewsWhereUniqueInput[]
    update?: PictureViewsUpdateWithWhereUniqueWithoutPictureInput | PictureViewsUpdateWithWhereUniqueWithoutPictureInput[]
    updateMany?: PictureViewsUpdateManyWithWhereWithoutPictureInput | PictureViewsUpdateManyWithWhereWithoutPictureInput[]
    deleteMany?: PictureViewsScalarWhereInput | PictureViewsScalarWhereInput[]
  }

  export type PictureCreateNestedOneWithoutViewsInput = {
    create?: XOR<PictureCreateWithoutViewsInput, PictureUncheckedCreateWithoutViewsInput>
    connectOrCreate?: PictureCreateOrConnectWithoutViewsInput
    connect?: PictureWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PictureUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<PictureCreateWithoutViewsInput, PictureUncheckedCreateWithoutViewsInput>
    connectOrCreate?: PictureCreateOrConnectWithoutViewsInput
    upsert?: PictureUpsertWithoutViewsInput
    connect?: PictureWhereUniqueInput
    update?: XOR<XOR<PictureUpdateToOneWithWhereWithoutViewsInput, PictureUpdateWithoutViewsInput>, PictureUncheckedUpdateWithoutViewsInput>
  }

  export type UserCreateNestedOneWithoutPageViewsInput = {
    create?: XOR<UserCreateWithoutPageViewsInput, UserUncheckedCreateWithoutPageViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPageViewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPageViewsNestedInput = {
    create?: XOR<UserCreateWithoutPageViewsInput, UserUncheckedCreateWithoutPageViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPageViewsInput
    upsert?: UserUpsertWithoutPageViewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPageViewsInput, UserUpdateWithoutPageViewsInput>, UserUncheckedUpdateWithoutPageViewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PageViewsCreateWithoutUserInput = {
    id?: string
    sessionId: string
    page: string
    viewTime?: Date | string
    pictureId?: string | null
  }

  export type PageViewsUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    page: string
    viewTime?: Date | string
    pictureId?: string | null
  }

  export type PageViewsCreateOrConnectWithoutUserInput = {
    where: PageViewsWhereUniqueInput
    create: XOR<PageViewsCreateWithoutUserInput, PageViewsUncheckedCreateWithoutUserInput>
  }

  export type PageViewsCreateManyUserInputEnvelope = {
    data: PageViewsCreateManyUserInput | PageViewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PageViewsUpsertWithWhereUniqueWithoutUserInput = {
    where: PageViewsWhereUniqueInput
    update: XOR<PageViewsUpdateWithoutUserInput, PageViewsUncheckedUpdateWithoutUserInput>
    create: XOR<PageViewsCreateWithoutUserInput, PageViewsUncheckedCreateWithoutUserInput>
  }

  export type PageViewsUpdateWithWhereUniqueWithoutUserInput = {
    where: PageViewsWhereUniqueInput
    data: XOR<PageViewsUpdateWithoutUserInput, PageViewsUncheckedUpdateWithoutUserInput>
  }

  export type PageViewsUpdateManyWithWhereWithoutUserInput = {
    where: PageViewsScalarWhereInput
    data: XOR<PageViewsUpdateManyMutationInput, PageViewsUncheckedUpdateManyWithoutUserInput>
  }

  export type PageViewsScalarWhereInput = {
    AND?: PageViewsScalarWhereInput | PageViewsScalarWhereInput[]
    OR?: PageViewsScalarWhereInput[]
    NOT?: PageViewsScalarWhereInput | PageViewsScalarWhereInput[]
    id?: StringFilter<"PageViews"> | string
    userId?: StringFilter<"PageViews"> | string
    sessionId?: StringFilter<"PageViews"> | string
    page?: StringFilter<"PageViews"> | string
    viewTime?: DateTimeFilter<"PageViews"> | Date | string
    pictureId?: StringNullableFilter<"PageViews"> | string | null
  }

  export type PictureViewsCreateWithoutPictureInput = {
    id?: string
    sessionId: string
    userId?: string | null
  }

  export type PictureViewsUncheckedCreateWithoutPictureInput = {
    id?: string
    sessionId: string
    userId?: string | null
  }

  export type PictureViewsCreateOrConnectWithoutPictureInput = {
    where: PictureViewsWhereUniqueInput
    create: XOR<PictureViewsCreateWithoutPictureInput, PictureViewsUncheckedCreateWithoutPictureInput>
  }

  export type PictureViewsCreateManyPictureInputEnvelope = {
    data: PictureViewsCreateManyPictureInput | PictureViewsCreateManyPictureInput[]
    skipDuplicates?: boolean
  }

  export type PictureViewsUpsertWithWhereUniqueWithoutPictureInput = {
    where: PictureViewsWhereUniqueInput
    update: XOR<PictureViewsUpdateWithoutPictureInput, PictureViewsUncheckedUpdateWithoutPictureInput>
    create: XOR<PictureViewsCreateWithoutPictureInput, PictureViewsUncheckedCreateWithoutPictureInput>
  }

  export type PictureViewsUpdateWithWhereUniqueWithoutPictureInput = {
    where: PictureViewsWhereUniqueInput
    data: XOR<PictureViewsUpdateWithoutPictureInput, PictureViewsUncheckedUpdateWithoutPictureInput>
  }

  export type PictureViewsUpdateManyWithWhereWithoutPictureInput = {
    where: PictureViewsScalarWhereInput
    data: XOR<PictureViewsUpdateManyMutationInput, PictureViewsUncheckedUpdateManyWithoutPictureInput>
  }

  export type PictureViewsScalarWhereInput = {
    AND?: PictureViewsScalarWhereInput | PictureViewsScalarWhereInput[]
    OR?: PictureViewsScalarWhereInput[]
    NOT?: PictureViewsScalarWhereInput | PictureViewsScalarWhereInput[]
    id?: StringFilter<"PictureViews"> | string
    sessionId?: StringFilter<"PictureViews"> | string
    userId?: StringNullableFilter<"PictureViews"> | string | null
    pictureId?: StringFilter<"PictureViews"> | string
  }

  export type PictureCreateWithoutViewsInput = {
    id?: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
    name?: string
  }

  export type PictureUncheckedCreateWithoutViewsInput = {
    id?: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
    name?: string
  }

  export type PictureCreateOrConnectWithoutViewsInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutViewsInput, PictureUncheckedCreateWithoutViewsInput>
  }

  export type PictureUpsertWithoutViewsInput = {
    update: XOR<PictureUpdateWithoutViewsInput, PictureUncheckedUpdateWithoutViewsInput>
    create: XOR<PictureCreateWithoutViewsInput, PictureUncheckedCreateWithoutViewsInput>
    where?: PictureWhereInput
  }

  export type PictureUpdateToOneWithWhereWithoutViewsInput = {
    where?: PictureWhereInput
    data: XOR<PictureUpdateWithoutViewsInput, PictureUncheckedUpdateWithoutViewsInput>
  }

  export type PictureUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    download_url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    download_url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPageViewsInput = {
    id?: string
    email: string
    name: string
    views?: number
    lastSeen?: Date | string
    type?: $Enums.UserType
  }

  export type UserUncheckedCreateWithoutPageViewsInput = {
    id?: string
    email: string
    name: string
    views?: number
    lastSeen?: Date | string
    type?: $Enums.UserType
  }

  export type UserCreateOrConnectWithoutPageViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPageViewsInput, UserUncheckedCreateWithoutPageViewsInput>
  }

  export type UserUpsertWithoutPageViewsInput = {
    update: XOR<UserUpdateWithoutPageViewsInput, UserUncheckedUpdateWithoutPageViewsInput>
    create: XOR<UserCreateWithoutPageViewsInput, UserUncheckedCreateWithoutPageViewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPageViewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPageViewsInput, UserUncheckedUpdateWithoutPageViewsInput>
  }

  export type UserUpdateWithoutPageViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type UserUncheckedUpdateWithoutPageViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type PageViewsCreateManyUserInput = {
    id?: string
    sessionId: string
    page: string
    viewTime?: Date | string
    pictureId?: string | null
  }

  export type PageViewsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    viewTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageViewsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    viewTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageViewsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    viewTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pictureId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureViewsCreateManyPictureInput = {
    id?: string
    sessionId: string
    userId?: string | null
  }

  export type PictureViewsUpdateWithoutPictureInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureViewsUncheckedUpdateWithoutPictureInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureViewsUncheckedUpdateManyWithoutPictureInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}