"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.4.1",
    "engineVersion": "55ae170b1ced7fc6ed07a15f110549408c501bb3",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum ReviewStatus {\n  PENDING\n  APPROVED\n  REJECTED\n}\n\nmodel Admin {\n  id        Int      @id @default(autoincrement())\n  email     String   @unique\n  password  String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([email])\n}\n\nmodel Testimony {\n  id             Int          @id @default(autoincrement())\n  title          String\n  content        String\n  authorEmail    String\n  authorName     String\n  status         ReviewStatus @default(PENDING)\n  createdAt      DateTime     @default(now())\n  updatedAt      DateTime     @updatedAt\n  updatedByEmail String?\n\n  @@index([status])\n  @@index([createdAt])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Admin\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Testimony\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"authorEmail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"authorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"ReviewStatus\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedByEmail\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"Admin.findUnique\",\"Admin.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Admin.findFirst\",\"Admin.findFirstOrThrow\",\"Admin.findMany\",\"data\",\"Admin.createOne\",\"Admin.createMany\",\"Admin.createManyAndReturn\",\"Admin.updateOne\",\"Admin.updateMany\",\"Admin.updateManyAndReturn\",\"create\",\"update\",\"Admin.upsertOne\",\"Admin.deleteOne\",\"Admin.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Admin.groupBy\",\"Admin.aggregate\",\"Testimony.findUnique\",\"Testimony.findUniqueOrThrow\",\"Testimony.findFirst\",\"Testimony.findFirstOrThrow\",\"Testimony.findMany\",\"Testimony.createOne\",\"Testimony.createMany\",\"Testimony.createManyAndReturn\",\"Testimony.updateOne\",\"Testimony.updateMany\",\"Testimony.updateManyAndReturn\",\"Testimony.upsertOne\",\"Testimony.deleteOne\",\"Testimony.deleteMany\",\"Testimony.groupBy\",\"Testimony.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"content\",\"authorEmail\",\"authorName\",\"ReviewStatus\",\"status\",\"createdAt\",\"updatedAt\",\"updatedByEmail\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"email\",\"password\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "XBUgCCwAAEwAMC0AAAQAEC4AAEwAMC8CAAAAATZAAEkAITdAAEkAIUQBAAAAAUUBAEcAIQEAAAABACABAAAAAQAgCCwAAEwAMC0AAAQAEC4AAEwAMC8CAEYAITZAAEkAITdAAEkAIUQBAEcAIUUBAEcAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAFLwIAAAABNkAAAAABN0AAAAABRAEAAAABRQEAAAABAQgAAAkAIAUvAgAAAAE2QAAAAAE3QAAAAAFEAQAAAAFFAQAAAAEBCAAACwAwAQgAAAsAMAUvAgBXACE2QABVACE3QABVACFEAQBTACFFAQBTACECAAAAAQAgCAAADgAgBS8CAFcAITZAAFUAITdAAFUAIUQBAFMAIUUBAFMAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAAFgAIBYAAFkAIBcAAFwAIBgAAFsAIBkAAFoAIAgsAABLADAtAAAXABAuAABLADAvAgA0ACE2QAA3ACE3QAA3ACFEAQA1ACFFAQA1ACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAwsAABFADAtAAAdABAuAABFADAvAgAAAAEwAQBHACExAQBHACEyAQBHACEzAQBHACE1AABINSI2QABJACE3QABJACE4AQBKACEBAAAAGgAgAQAAABoAIAwsAABFADAtAAAdABAuAABFADAvAgBGACEwAQBHACExAQBHACEyAQBHACEzAQBHACE1AABINSI2QABJACE3QABJACE4AQBKACEBOAAATQAgAwAAAB0AIAMAAB4AMAQAABoAIAMAAAAdACADAAAeADAEAAAaACADAAAAHQAgAwAAHgAwBAAAGgAgCS8CAAAAATABAAAAATEBAAAAATIBAAAAATMBAAAAATUAAAA1AjZAAAAAATdAAAAAATgBAAAAAQEIAAAiACAJLwIAAAABMAEAAAABMQEAAAABMgEAAAABMwEAAAABNQAAADUCNkAAAAABN0AAAAABOAEAAAABAQgAACQAMAEIAAAkADAJLwIAVwAhMAEAUwAhMQEAUwAhMgEAUwAhMwEAUwAhNQAAVDUiNkAAVQAhN0AAVQAhOAEAVgAhAgAAABoAIAgAACcAIAkvAgBXACEwAQBTACExAQBTACEyAQBTACEzAQBTACE1AABUNSI2QABVACE3QABVACE4AQBWACECAAAAHQAgCAAAKQAgAgAAAB0AIAgAACkAIAMAAAAaACAPAAAiACAQAAAnACABAAAAGgAgAQAAAB0AIAYVAABOACAWAABPACAXAABSACAYAABRACAZAABQACA4AABNACAMLAAAMwAwLQAAMAAQLgAAMwAwLwIANAAhMAEANQAhMQEANQAhMgEANQAhMwEANQAhNQAANjUiNkAANwAhN0AANwAhOAEAOAAhAwAAAB0AIAMAAC8AMBQAADAAIAMAAAAdACADAAAeADAEAAAaACAMLAAAMwAwLQAAMAAQLgAAMwAwLwIANAAhMAEANQAhMQEANQAhMgEANQAhMwEANQAhNQAANjUiNkAANwAhN0AANwAhOAEAOAAhDRUAAD0AIBYAAEQAIBcAAD0AIBgAAD0AIBkAAD0AIDkCAAAAAToCAAAABDsCAAAABDwCAAAAAT0CAAAAAT4CAAAAAT8CAAAAAUMCAEMAIQ4VAAA9ACAYAABCACAZAABCACA5AQAAAAE6AQAAAAQ7AQAAAAQ8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAFBAQAAAAFCAQAAAAFDAQBBACEHFQAAPQAgGAAAQAAgGQAAQAAgOQAAADUCOgAAADUIOwAAADUIQwAAPzUiCxUAAD0AIBgAAD4AIBkAAD4AIDlAAAAAATpAAAAABDtAAAAABDxAAAAAAT1AAAAAAT5AAAAAAT9AAAAAAUNAADwAIQ4VAAA6ACAYAAA7ACAZAAA7ACA5AQAAAAE6AQAAAAU7AQAAAAU8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAFBAQAAAAFCAQAAAAFDAQA5ACEOFQAAOgAgGAAAOwAgGQAAOwAgOQEAAAABOgEAAAAFOwEAAAAFPAEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAAAABQQEAAAABQgEAAAABQwEAOQAhCDkCAAAAAToCAAAABTsCAAAABTwCAAAAAT0CAAAAAT4CAAAAAT8CAAAAAUMCADoAIQs5AQAAAAE6AQAAAAU7AQAAAAU8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAFBAQAAAAFCAQAAAAFDAQA7ACELFQAAPQAgGAAAPgAgGQAAPgAgOUAAAAABOkAAAAAEO0AAAAAEPEAAAAABPUAAAAABPkAAAAABP0AAAAABQ0AAPAAhCDkCAAAAAToCAAAABDsCAAAABDwCAAAAAT0CAAAAAT4CAAAAAT8CAAAAAUMCAD0AIQg5QAAAAAE6QAAAAAQ7QAAAAAQ8QAAAAAE9QAAAAAE-QAAAAAE_QAAAAAFDQAA-ACEHFQAAPQAgGAAAQAAgGQAAQAAgOQAAADUCOgAAADUIOwAAADUIQwAAPzUiBDkAAAA1AjoAAAA1CDsAAAA1CEMAAEA1Ig4VAAA9ACAYAABCACAZAABCACA5AQAAAAE6AQAAAAQ7AQAAAAQ8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAFBAQAAAAFCAQAAAAFDAQBBACELOQEAAAABOgEAAAAEOwEAAAAEPAEAAAABPQEAAAABPgEAAAABPwEAAAABQAEAAAABQQEAAAABQgEAAAABQwEAQgAhDRUAAD0AIBYAAEQAIBcAAD0AIBgAAD0AIBkAAD0AIDkCAAAAAToCAAAABDsCAAAABDwCAAAAAT0CAAAAAT4CAAAAAT8CAAAAAUMCAEMAIQg5CAAAAAE6CAAAAAQ7CAAAAAQ8CAAAAAE9CAAAAAE-CAAAAAE_CAAAAAFDCABEACEMLAAARQAwLQAAHQAQLgAARQAwLwIARgAhMAEARwAhMQEARwAhMgEARwAhMwEARwAhNQAASDUiNkAASQAhN0AASQAhOAEASgAhCDkCAAAAAToCAAAABDsCAAAABDwCAAAAAT0CAAAAAT4CAAAAAT8CAAAAAUMCAD0AIQs5AQAAAAE6AQAAAAQ7AQAAAAQ8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAFBAQAAAAFCAQAAAAFDAQBCACEEOQAAADUCOgAAADUIOwAAADUIQwAAQDUiCDlAAAAAATpAAAAABDtAAAAABDxAAAAAAT1AAAAAAT5AAAAAAT9AAAAAAUNAAD4AIQs5AQAAAAE6AQAAAAU7AQAAAAU8AQAAAAE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAFBAQAAAAFCAQAAAAFDAQA7ACEILAAASwAwLQAAFwAQLgAASwAwLwIANAAhNkAANwAhN0AANwAhRAEANQAhRQEANQAhCCwAAEwAMC0AAAQAEC4AAEwAMC8CAEYAITZAAEkAITdAAEkAIUQBAEcAIUUBAEcAIQAAAAAAAAFGAQAAAAEBRgAAADUCAUZAAAAAAQFGAQAAAAEFRgIAAAABRwIAAAABSAIAAAABSQIAAAABSgIAAAABAAAAAAAAAAAABRUABhYABxcACBgACRkACgAAAAAABRUABhYABxcACBgACRkACgAAAAUVABAWABEXABIYABMZABQAAAAAAAUVABAWABEXABIYABMZABQBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIaGAUbGQscGwwdHAweHwwfIAwgIQwhIwwiJQIjJg0kKAwlKgImKw4nLAwoLQwpLgIqMQ8rMhU"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs")));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map