document.addEventListener("DOMContentLoaded", function (event) {
var legacy_sections = {
    "sec-": "sec-symbol-value",
    "sec-%arrayiteratorprototype%-@@iterator": "sec-%iteratorprototype%-@@iterator",
    "sec-%arrayiteratorprototype%-next": "sec-%arrayiteratorprototype%.next",
    "sec-%mapiteratorprototype%-@@iterator": "sec-%iteratorprototype%-@@iterator",
    "sec-%realm%": "sec-code-realms",
    "sec-%realm%-@@create": "sec-code-realms",
    "sec-%realm%-constructor": "sec-code-realms",
    "sec-%realm%.prototype": "sec-code-realms",
    "sec-%realm%.prototype-@@tostringtag": "sec-code-realms",
    "sec-%realm%.prototype.constructor": "sec-code-realms",
    "sec-%realm%.prototype.eval": "sec-code-realms",
    "sec-%setiteratorprototype%-@@iterator": "sec-%iteratorprototype%-@@iterator",
    "sec-%stringiteratorprototype%.@@tostringtag": "sec-%stringiteratorprototype%-@@tostringtag",
    "sec-%typedarray%-array": "sec-%typedarray%-object",
    "sec-.function.prototype.tomethod-newhome-methodname": "sec-function.prototype.tomethod",
    "sec-D-additions-and-changes-that-introduce-incompatibilities-with-prior-editions": "sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions",
    "sec-D-additions-and-changes-that-introduce-incompatibilities-with-prior-editions-in-the-5th-edition": "sec-in-the-5th-edition",
    "sec-D-additions-and-changes-that-introduce-incompatibilities-with-prior-editions-in-the-6th-edition": "sec-in-the-6th-edition",
    "sec-E-additions-and-changes-that-introduce-incompatibilities-with-prior-editions": "sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions",
    "sec-E-additions-and-changes-that-introduce-incompatibilities-with-prior-editions-in-the-5th-edition": "sec-in-the-5th-edition",
    "sec-E-additions-and-changes-that-introduce-incompatibilities-with-prior-editions-in-the-6th-edition": "sec-in-the-6th-edition",
    "sec-__proto___-property-names-in-object-initialisers": "sec-__proto__-property-names-in-object-initializers",
    "sec-__proto___-property-names-in-object-initializers": "sec-__proto__-property-names-in-object-initializers",
    "sec-__var-statements-in-catch-blocks": "sec-variablestatements-in-catch-blocks",
    "sec-additional-properties": "sec-additional-built-in-properties",
    "sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions-in-the-5th-edition": "sec-in-the-5th-edition",
    "sec-additions-and-changes-that-introduce-incompatibilities-with-prior-editions-in-the-6th-edition": "sec-in-the-6th-edition",
    "sec-additive-operators-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-allocatepromise-constructor-abstraction-operation": "sec-allocatepromise",
    "sec-arguments-object": "sec-createunmappedargumentsobject",
    "sec-array-comprehension": "sec-array.prototype.map",
    "sec-array-comprehension-runtime-semantics-bindinginitialisation": "sec-array.prototype.map",
    "sec-array-comprehension-runtime-semantics-bindinginitialization": "sec-array.prototype.map",
    "sec-array-comprehension-runtime-semantics-evaluation": "sec-array.prototype.map",
    "sec-array-comprehension-static-semantics-early-errors": "sec-array.prototype.map",
    "sec-array-initialiser": "sec-array-initializer",
    "sec-array-item1-item2": "sec-array-items",
    "sec-array-iterator-object-structure": "sec-array-iterator-objects",
    "sec-array-iterator-prototype": "sec-%arrayiteratorprototype%-object",
    "sec-arrayiterator.prototype.@@iterator": "sec-%iteratorprototype%-@@iterator",
    "sec-arrayiterator.prototype.@@tostringtag": "sec-%arrayiteratorprototype%-@@tostringtag",
    "sec-arrayiterator.prototype.next": "sec-%arrayiteratorprototype%.next",
    "sec-arrow-function-definitions-runtime-semantics-bindinginitialisation": "sec-arrow-function-definitions-runtime-semantics-iteratorbindinginitialization",
    "sec-arrow-function-definitions-runtime-semantics-iteratorbindinginitialisation": "sec-arrow-function-definitions-runtime-semantics-iteratorbindinginitialization",
    "sec-arrow-function-definitions-static-semantics-lexicaldeclarations": "sec-arrow-function-definitions-static-semantics-lexicallyscopeddeclarations",
    "sec-assignment-operators-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-binary-bitwise-operators-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-binary-logical-operators-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-bitwise-shift-operators-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-block-static-semantics-lexicaldeclarations": "sec-block-static-semantics-lexicallyscopeddeclarations",
    "sec-boundfunctiontargetrealm": "sec-getfunctionrealm",
    "sec-canonicalnumericstring": "sec-canonicalnumericindexstring",
    "sec-checkobjectcoercible": "sec-requireobjectcoercible",
    "sec-class-definitions-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-class-definitions-static-semantics-lexicallydeclarednames": "sec-class-definitions-static-semantics-boundnames",
    "sec-class-definitions-static-semantics-vardeclarednames": "sec-block-static-semantics-vardeclarednames",
    "sec-clonearraybuffer-srcbuffer-srcbyteoffset-srctype-cloneelementtype-srclength": "sec-clonearraybuffer",
    "sec-comma-operator-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-conditional-operator-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-construct": "sec-bound-function-exotic-objects-construct",
    "sec-corrections-and-clarifications-that-may-introduce-incompatibilities-with-prior-editions": "sec-corrections-and-clarifications-with-possible-compatibility-impact",
    "sec-corrections-and-clarifications-that-may-introduce-incompatibilities-with-prior-editions-in-the-5th-edition": "sec-in-edition-5.1",
    "sec-corrections-and-clarifications-that-may-introduce-incompatibilities-with-prior-editions-in-the-6th-edition": "sec-in-edition-6",
    "sec-createowndataproperty": "sec-createdataproperty",
    "sec-createrejectfunction": "sec-promise-reject-functions",
    "sec-createresolvefunction": "sec-promise-resolve-functions",
    "sec-createstrictargumentsobject": "sec-createunmappedargumentsobject",
    "sec-declarative-environment-records-initialisebinding-n-v": "sec-declarative-environment-records-initializebinding-n-v",
    "sec-destructuring-binding-patterns-runtime-semantics-bindinginitialisation": "sec-destructuring-binding-patterns-runtime-semantics-bindinginitialization",
    "sec-destructuring-binding-patterns-runtime-semantics-indexedbindinginitialisation": "sec-destructuring-binding-patterns-runtime-semantics-iteratorbindinginitialization",
    "sec-destructuring-binding-patterns-runtime-semantics-iteratorbindinginitialisation": "sec-destructuring-binding-patterns-runtime-semantics-iteratorbindinginitialization",
    "sec-destructuring-binding-patterns-static-semantics-early-errors": "sec-identifiers-static-semantics-early-errors",
    "sec-destructuring-binding-patterns-static-semantics-hasinitialiser": "sec-destructuring-binding-patterns-static-semantics-hasinitializer",
    "sec-ecmascript-language-modules-and-scripts": "sec-ecmascript-language-scripts-and-modules",
    "sec-ecmascript-ordinary-and-exotic-objects-behaviours": "sec-ordinary-and-exotic-objects-behaviours",
    "sec-enqueuetask": "sec-enqueuejob",
    "sec-equality-operators-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-exotic-arguments-objects": "sec-arguments-exotic-objects",
    "sec-function-declaration-instantiation": "sec-functiondeclarationinstantiation",
    "sec-function-definitions-runtime-semantics-bindinginitialisation": "sec-function-definitions-runtime-semantics-iteratorbindinginitialization",
    "sec-function-definitions-runtime-semantics-indexedbindinginitialisation": "sec-function-definitions-runtime-semantics-iteratorbindinginitialization",
    "sec-function-definitions-runtime-semantics-iteratorbindinginitialisation": "sec-function-definitions-runtime-semantics-iteratorbindinginitialization",
    "sec-function-definitions-static-semantics-hasinitialiser": "sec-function-definitions-static-semantics-hasinitializer",
    "sec-function-definitions-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-function-definitions-static-semantics-lexicaldeclarations": "sec-function-definitions-static-semantics-lexicallyscopeddeclarations",
    "sec-functioninitialise": "sec-functioninitialize",
    "sec-generator-comprehensions": "sec-array.prototype.map",
    "sec-generator-comprehensions-runtime-semantics-evaluation": "sec-array.prototype.map",
    "sec-generator-comprehensions-static-semantics-early-errors": "sec-array.prototype.map",
    "sec-generator-function-definitions-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-generator-function-definitions-static-semantics-lexicallydeclarednames": "sec-generator-function-definitions-static-semantics-boundnames",
    "sec-generator-function-definitions-static-semantics-vardeclarednames": "sec-block-static-semantics-vardeclarednames",
    "sec-generator-function-definitions-static-semantics-varscopeddeclarations": "sec-block-static-semantics-vardeclarednames",
    "sec-get-reflect.realm.prototype.global": "sec-code-realms",
    "sec-get-reflect.realm.prototype.intrinsics": "sec-code-realms",
    "sec-get-reflect.realm.prototype.stdlib": "sec-code-realms",
    "sec-getownpropertykey": "sec-getownpropertykeys",
    "sec-getsuperbinding": "sec-clonemethod",
    "sec-global-environment-records-initialisebinding-n-v": "sec-global-environment-records-initializebinding-n-v",
    "sec-grammar-summary-json": "sec-json.parse",
    "sec-grouping-operator-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-identifier-reference-runtime-semantics-evaluation": "sec-identifiers-runtime-semantics-evaluation",
    "sec-identifier-reference-static-semantics-early-errors": "sec-identifiers-static-semantics-early-errors",
    "sec-identifier-reference-static-semantics-stringvalue": "sec-identifiers-static-semantics-stringvalue",
    "sec-identifier-resolution": "sec-resolvebinding",
    "sec-identifiers-and-identifier-names": "sec-identifier-names",
    "sec-identifiers-and-identifier-names-static-semantics-early-errors": "sec-identifier-names-static-semantics-early-errors",
    "sec-identifiers-and-identifier-names-static-semantics-stringvalue": "sec-identifier-names-static-semantics-stringvalue",
    "sec-identity-functions": "sec-promisereactionjob",
    "sec-initialisation": "sec-initialization",
    "sec-initialisepromise": "sec-initializepromise",
    "sec-intailposition": "sec-isintailposition",
    "sec-isiterable": "sec-checkiterable",
    "sec-isneuteredbuffer": "sec-isdetachedbuffer",
    "sec-iterable-iterface": "sec-iterable-interface",
    "sec-iteration-related-abstract-operations": "sec-generator-abstract-operations",
    "sec-iterator-iterface": "sec-iterator-interface",
    "sec-iteratorresult-iterface": "sec-iteratorresult-interface",
    "sec-json-grammar-json-lexical-grammar": "sec-json.parse",
    "sec-json-grammar-json-syntactic-grammar": "sec-json.parse",
    "sec-json-json-lexical-grammar": "sec-json.parse",
    "sec-json-json-syntactic-grammar": "sec-json.parse",
    "sec-json-object-json-grammar": "sec-json.parse",
    "sec-labelled-statements-runtime-semantics-evaluation": "sec-runtime-semantics-labelledevaluation-runtime-semantics-evaluation",
    "sec-labelledstatementevaluation": "sec-statement-semantics-runtime-semantics-labelledevaluation",
    "sec-let-and-const-declarations-runtime-semantics-bindinginitialisation": "sec-identifiers-runtime-semantics-bindinginitialization",
    "sec-let-and-const-declarations-static-semantics-stringvalue": "sec-identifiers-static-semantics-stringvalue",
    "sec-makesuperreference": "sec-makesuperpropertyreference",
    "sec-map-iterable-comparator": "sec-map-iterable",
    "sec-map-iterator-object-structure": "sec-map-iterator-objects",
    "sec-map-iterator-prototype": "sec-%mapiteratorprototype%-object",
    "sec-mapiterator.prototype-@@iterator": "sec-%iteratorprototype%-@@iterator",
    "sec-mapiterator.prototype-@@tostringtag": "sec-%mapiteratorprototype%-@@tostringtag",
    "sec-mapiterator.prototype.next": "sec-%mapiteratorprototype%.next",
    "sec-method-definitions-static-semantics-issimpleparameterlist": "sec-function-definitions-static-semantics-issimpleparameterlist",
    "sec-mixinproperties": "sec-object.assign",
    "sec-module-semantics-static-semantics-lexicaldeclarations": "sec-module-semantics-static-semantics-lexicallyscopeddeclarations",
    "sec-module-static-semantics": "sec-module-semantics",
    "sec-module-static-semantics-static-semantics-early-errors": "sec-module-semantics-static-semantics-early-errors",
    "sec-module-static-semantics-static-semantics-exportedbindings": "sec-module-semantics-static-semantics-exportedbindings",
    "sec-module-static-semantics-static-semantics-exportentries": "sec-module-semantics-static-semantics-exportentries",
    "sec-module-static-semantics-static-semantics-importentries": "sec-module-semantics-static-semantics-importentries",
    "sec-module-static-semantics-static-semantics-isstrict": "sec-module-semantics-static-semantics-isstrict",
    "sec-module-static-semantics-static-semantics-lexicaldeclarations": "sec-module-semantics-static-semantics-lexicallyscopeddeclarations",
    "sec-module-static-semantics-static-semantics-lexicallydeclarednames": "sec-module-semantics-static-semantics-lexicallydeclarednames",
    "sec-module-static-semantics-static-semantics-lexicallyscopeddeclarations": "sec-module-semantics-static-semantics-lexicallyscopeddeclarations",
    "sec-module-static-semantics-static-semantics-modulerequests": "sec-module-semantics-static-semantics-modulerequests",
    "sec-module-static-semantics-static-semantics-vardeclarednames": "sec-module-semantics-static-semantics-vardeclarednames",
    "sec-module-static-semantics-static-semantics-varscopeddeclarations": "sec-module-semantics-static-semantics-varscopeddeclarations",
    "sec-multiplicative-operators-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-namemakearggetter-name-env-abstract-operation": "sec-makearggetter",
    "sec-neuterarraybuffer": "sec-detacharraybuffer",
    "sec-new-%realm%-argumentslist": "sec-code-realms",
    "sec-new-object-value": "sec-new-object-argumentslist",
    "sec-new-reflect.realm-argumentslist": "sec-code-realms",
    "sec-nexttask-result": "sec-nextjob-result",
    "sec-nexttask-result-algorithm-step": "sec-nextjob-result",
    "sec-number.prototype.clz": "sec-math.clz32",
    "sec-object-constructor-called-as-a-function": "sec-object-value",
    "sec-object-environment-records-initialisebinding-n-v": "sec-object-environment-records-initializebinding-n-v",
    "sec-object-initialiser": "sec-object-initializer",
    "sec-object-initialiser-runtime-semantics-evaluation": "sec-object-initializer-runtime-semantics-evaluation",
    "sec-object-initialiser-runtime-semantics-propertydefinitionevaluation": "sec-object-initializer-runtime-semantics-propertydefinitionevaluation",
    "sec-object-initialiser-static-semantics-contains": "sec-object-initializer-static-semantics-contains",
    "sec-object-initialiser-static-semantics-early-errors": "sec-object-initializer-static-semantics-early-errors",
    "sec-object-initialiser-static-semantics-hascomputedpropertykey": "sec-object-initializer-static-semantics-hascomputedpropertykey",
    "sec-object-initialiser-static-semantics-propname": "sec-object-initializer-static-semantics-propname",
    "sec-object-internal-methods-and-internal-data-properties": "sec-object-internal-methods-and-internal-slots",
    "sec-object.mixin": "sec-object.assign",
    "sec-ordinary-function-objects": "sec-ecmascript-function-objects",
    "sec-ordinary-function-objects-call-thisargument-argumentslist": "sec-ecmascript-function-objects-call-thisargument-argumentslist",
    "sec-ordinary-function-objects-getownproperty-p": "sec-ecmascript-function-objects-getownproperty-p",
    "sec-ordinary-object-internal-methods-and-internal-data-properties": "sec-ordinary-object-internal-methods-and-internal-slots",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-defineownproperty-p-desc": "sec-ordinary-object-internal-methods-and-internal-slots-defineownproperty-p-desc",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-delete-p": "sec-ordinary-object-internal-methods-and-internal-slots-delete-p",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-enumerate": "sec-ordinary-object-internal-methods-and-internal-slots-enumerate",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-get-p-receiver": "sec-ordinary-object-internal-methods-and-internal-slots-get-p-receiver",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-getownproperty-p": "sec-ordinary-object-internal-methods-and-internal-slots-getownproperty-p",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-getprototypeof": "sec-ordinary-object-internal-methods-and-internal-slots-getprototypeof",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-hasproperty-p": "sec-ordinary-object-internal-methods-and-internal-slots-hasproperty-p",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-isextensible": "sec-ordinary-object-internal-methods-and-internal-slots-isextensible",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-ownpropertykeys": "sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-preventextensions": "sec-ordinary-object-internal-methods-and-internal-slots-preventextensions",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-set-p-v-receiver": "sec-ordinary-object-internal-methods-and-internal-slots-set-p-v-receiver",
    "sec-ordinary-object-internal-methods-and-internal-data-properties-setprototypeof-v": "sec-ordinary-object-internal-methods-and-internal-slots-setprototypeof-v",
    "sec-ordinaryconstruct": "sec-construct-f-argumentslist",
    "sec-other-properties-of-the-global-object-json": "sec-json",
    "sec-postfix-expressions-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-primary-expressions": "sec-primary-expression",
    "sec-primary-expressions-literals": "sec-primary-expression-literals",
    "sec-primary-expressions-regular-expression-literals": "sec-primary-expression-regular-expression-literals",
    "sec-primary-expressions-regular-expression-literals-static-semantics-early-errors": "sec-primary-expression-regular-expression-literals-static-semantics-early-errors",
    "sec-primary-expressions-semantics": "sec-primary-expression-semantics",
    "sec-promise": "sec-promise-executor",
    "sec-promise-resolution-handler-functions": "sec-promise-resolve-functions",
    "sec-promise-tasks": "sec-promise-jobs",
    "sec-promise.cast": "sec-promise.resolve",
    "sec-promiseall": "sec-promise.all",
    "sec-promiseall-promiselist-abstact-operation": "sec-promise.all",
    "sec-promiseall-promiselist-abstaction-operation": "sec-promise.all",
    "sec-promisebuiltincapability-abstact-operation": "sec-promisebuiltincapability",
    "sec-promisebuiltincapability-abstaction-operation": "sec-promisebuiltincapability",
    "sec-promisecatch": "sec-promise.prototype.catch",
    "sec-promisecatch-promise-rejectedaction-abstact-operation": "sec-promise.prototype.catch",
    "sec-promisecatch-promise-rejectedaction-abstaction-operation": "sec-promise.prototype.catch",
    "sec-promisenew-executor-abstact-operation": "sec-promisenew",
    "sec-promisenew-executor-abstaction-operation": "sec-promisenew",
    "sec-promiseof-value-abstact-operation": "sec-promiseof",
    "sec-promiseof-value-abstaction-operation": "sec-promiseof",
    "sec-promisereactiontask": "sec-promisereactionjob",
    "sec-promiseresolvethenabletask": "sec-promiseresolvethenablejob",
    "sec-promisethen": "sec-promise.prototype.then",
    "sec-promisethen-promise-resolvedaction-rejectedaction-abstact-operation": "sec-promise.prototype.then",
    "sec-promisethen-promise-resolvedaction-rejectedaction-abstaction-operation": "sec-promise.prototype.then",
    "sec-properties-of-%realm%-instances": "sec-code-realms",
    "sec-properties-of-reflect.realm-instances": "sec-code-realms",
    "sec-properties-of-the-%realm%-constructor": "sec-code-realms",
    "sec-properties-of-the-%realm%-prototype-object": "sec-code-realms",
    "sec-properties-of-the-proxy-factory-function": "sec-properties-of-the-proxy-constructor-function",
    "sec-properties-of-the-reflect.realm-constructor": "sec-code-realms",
    "sec-properties-of-the-reflect.realm-prototype-object": "sec-code-realms",
    "sec-proxy": "sec-proxy-target-handler",
    "sec-proxy-factory-function": "sec-proxy-constructor-function",
    "sec-proxy-object-internal-methods-and-internal-data-properties": "sec-proxy-object-internal-methods-and-internal-slots",
    "sec-proxy-object-internal-methods-and-internal-data-properties-call-thisargument-argumentslist": "sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist",
    "sec-proxy-object-internal-methods-and-internal-data-properties-defineownproperty-p-desc": "sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc",
    "sec-proxy-object-internal-methods-and-internal-data-properties-delete-p": "sec-proxy-object-internal-methods-and-internal-slots-delete-p",
    "sec-proxy-object-internal-methods-and-internal-data-properties-enumerate": "sec-proxy-object-internal-methods-and-internal-slots-enumerate",
    "sec-proxy-object-internal-methods-and-internal-data-properties-get-p-receiver": "sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver",
    "sec-proxy-object-internal-methods-and-internal-data-properties-getownproperty-p": "sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p",
    "sec-proxy-object-internal-methods-and-internal-data-properties-getprototypeof": "sec-proxy-object-internal-methods-and-internal-slots-getprototypeof",
    "sec-proxy-object-internal-methods-and-internal-data-properties-hasproperty-p": "sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p",
    "sec-proxy-object-internal-methods-and-internal-data-properties-isextensible": "sec-proxy-object-internal-methods-and-internal-slots-isextensible",
    "sec-proxy-object-internal-methods-and-internal-data-properties-ownpropertykeys": "sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys",
    "sec-proxy-object-internal-methods-and-internal-data-properties-preventextensions": "sec-proxy-object-internal-methods-and-internal-slots-preventextensions",
    "sec-proxy-object-internal-methods-and-internal-data-properties-set-p-v-receiver": "sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver",
    "sec-proxy-object-internal-methods-and-internal-data-properties-setprototypeof-v": "sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v",
    "sec-realm-objects": "sec-code-realms",
    "sec-realm-subclass-extension-properties": "sec-code-realms",
    "sec-rebindsuper": "sec-clonemethod",
    "sec-reflect.-realm.prototype.eval-source": "sec-code-realms",
    "sec-reflect.hasown": "sec-reflect.getownpropertydescriptor",
    "sec-reflect.realm": "sec-code-realms",
    "sec-reflect.realm-@@create": "sec-code-realms",
    "sec-reflect.realm-constructor": "sec-code-realms",
    "sec-reflect.realm.prototype": "sec-code-realms",
    "sec-reflect.realm.prototype-@@tostringtag": "sec-code-realms",
    "sec-reflect.realm.prototype.constructor": "sec-code-realms",
    "sec-reflect.realm.prototype.directeval": "sec-code-realms",
    "sec-reflect.realm.prototype.eval": "sec-eval-x",
    "sec-reflect.realm.prototype.indirecteval": "sec-code-realms",
    "sec-reflect.realm.prototype.initglobal": "sec-code-realms",
    "sec-reflect.realm.prototype.noneval": "sec-code-realms",
    "sec-reflection.": "sec-reflection",
    "sec-regexpinitialise": "sec-regexpinitialize",
    "sec-relational-operators-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-runtime-semantics-array-accumulation": "sec-runtime-semantics-arrayaccumulation",
    "sec-runtime-semantics-block-declaration-instantiation": "sec-blockdeclarationinstantiation",
    "sec-runtime-semantics-comprehensioncomponentevaluation": "sec-array.prototype.map",
    "sec-runtime-semantics-comprehensionevaluation": "sec-array.prototype.map",
    "sec-runtime-semantics-decode-abstract-operation": "sec-decode",
    "sec-runtime-semantics-encode-abstract-operation": "sec-encode",
    "sec-runtime-semantics-escaperegexppattern-abstract-operation": "sec-escaperegexppattern",
    "sec-runtime-semantics-getreplacesubstitution-abstract-operation": "sec-getreplacesubstitution",
    "sec-runtime-semantics-indexeddestructuringassignmentevaluation": "sec-runtime-semantics-iteratordestructuringassignmentevaluation",
    "sec-runtime-semantics-instanceofoperator-o-c": "sec-instanceofoperator",
    "sec-runtime-semantics-instanceofoperator-o-c": "sec-instanceofoperator",
    "sec-runtime-semantics-keyedbindinginitialisation": "sec-runtime-semantics-keyedbindinginitialization",
    "sec-runtime-semantics-labelledstatementevaluation-label-stmt-labelset": "sec-statement-semantics-runtime-semantics-labelledevaluation",
    "sec-runtime-semantics-loopcontinues": "sec-loopcontinues",
    "sec-runtime-semantics-loopcontinues-completion-labelset": "sec-loopcontinues",
    "sec-runtime-semantics-loopcontinues-completion-labelset": "sec-loopcontinues",
    "sec-runtime-semantics-makesuperreference-propertykey-strict": "sec-makesuperpropertyreference",
    "sec-runtime-semantics-moduledeclarationinstantiation": "sec-moduledeclarationinstantiation",
    "sec-runtime-semantics-objectdefineproperties-abstract-operation": "sec-objectdefineproperties",
    "sec-runtime-semantics-preparefortailcall": "sec-preparefortailcall",
    "sec-runtime-semantics-quote-abstract-operation": "sec-quote",
    "sec-runtime-semantics-regexpalloc-abstract-operation": "sec-regexpalloc",
    "sec-runtime-semantics-regexpcreate-abstract-operation": "sec-regexpcreate",
    "sec-runtime-semantics-regexpexec-abstract-operation": "sec-regexpexec",
    "sec-runtime-semantics-regexpinitialise-abstract-operation": "sec-regexpinitialize",
    "sec-runtime-semantics-script-evaluation": "sec-runtime-semantics-scriptevaluation",
    "sec-runtime-semantics-sortcompare-abstract-operation": "sec-sortcompare",
    "sec-runtime-semantics-splitmatch-abstract-operation": "sec-splitmatch",
    "sec-runtime-semantics-walk-abstract-operation": "sec-walk",
    "sec-scriptevaluationtask": "sec-scriptevaluationjob",
    "sec-scripts-runtime-semantics-evaluation": "sec-runtime-semantics-scriptevaluation",
    "sec-semantics-isvalidsimpleassignmenttarget": "sec-semantics-static-semantics-isvalidsimpleassignmenttarget",
    "sec-semantics-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-set-iterable-comparator": "sec-set-iterable",
    "sec-set-iterator-object-structure": "sec-set-iterator-objects",
    "sec-set-iterator-prototype": "sec-%setiteratorprototype%-object",
    "sec-setiterator.prototype.@@iterator": "sec-%iteratorprototype%-@@iterator",
    "sec-setiterator.prototype.@@tostringtag": "sec-%setiteratorprototype%-@@tostringtag",
    "sec-setiterator.prototype.next": "sec-%setiteratorprototype%.next",
    "sec-standard-built-in-ecmascript-objects": "sec-ecmascript-standard-built-in-objects",
    "sec-static-semantics-coveredparenthesisedexpression": "sec-static-semantics-coveredparenthesizedexpression",
    "sec-static-semantics-elision-width": "sec-static-semantics-elisionwidth",
    "sec-static-semantics-importednames": "sec-static-semantics-importedbindings",
    "sec-static-semantics-iscomputedpropertyname": "sec-static-semantics-iscomputedpropertykey",
    "sec-static-semantics-lexicallyscopeddeclarations": "sec-scripts-static-semantics-lexicallyscopeddeclarations",
    "sec-static-semantics-prototypemethoddefinitions": "sec-static-semantics-nonconstructormethoddefinitions",
    "sec-static-semantics-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-static-semantics-staticmethoddefinitions": "sec-static-semantics-nonconstructormethoddefinitions",
    "sec-static-semantics-stringvalue": "sec-identifier-names-static-semantics-stringvalue",
    "sec-static-semantics-tail-position": "sec-isintailposition",
    "sec-static-semantics-toplevellexicallydeclarednames": "sec-block-static-semantics-toplevellexicallydeclarednames",
    "sec-static-semantics-toplevellexicallyscopeddeclarations": "sec-block-static-semantics-toplevellexicallyscopeddeclarations",
    "sec-static-semantics-toplevelvardeclarednames": "sec-block-static-semantics-toplevelvardeclarednames",
    "sec-static-semantics-toplevelvarscopeddeclarations": "sec-block-static-semantics-toplevelvarscopeddeclarations",
    "sec-static-semantics-utf-16-encoding": "sec-static-semantics-utf-16encoding",
    "sec-static-semantics-utf16decode-lead-trail": "sec-utf16decode",
    "sec-string-exotic-objects-defineownproperty-p-desc": "sec-string-exotic-objects",
    "sec-switch-statement-static-semantics-lexicaldeclarations": "sec-switch-statement-static-semantics-lexicallyscopeddeclarations",
    "sec-symbol": "sec-symbol-description",
    "sec-symbol-constructor-class": "sec-symbol-constructor",
    "sec-symbol-type": "sec-ecmascript-language-types-symbol-type",
    "sec-syntactic-and-lexical-grammars-json-grammar": "sec-json.parse",
    "sec-tasks-and-task-queues": "sec-jobs-and-job-queues",
    "sec-this.add-eset.prototype.add-value": "sec-set.prototype.add",
    "sec-thisresolution": "sec-resolvethisbinding",
    "sec-thrower-functions": "sec-triggerpromisereactions",
    "sec-toint16-argument-signed-bit-integer": "sec-toint16",
    "sec-toint32-argument-signed-bit-integer": "sec-toint32",
    "sec-toint8-argument-signed-bit-integer": "sec-toint8",
    "sec-touint16-argument-unsigned-bit-integer": "sec-touint16",
    "sec-touint32-argument-unsigned-bit-integer": "sec-touint32",
    "sec-touint8-argument-unsigned-bit-integer": "sec-touint8",
    "sec-touint8clamp-argument-unsigned-bit-integer-clamped": "sec-touint8clamp",
    "sec-try-statement-runtime-semantics-bindinginitialisation": "sec-try-statement-runtime-semantics-bindinginitialization",
    "sec-types-of-executable-code": "sec-types-of-source-code",
    "sec-unary-operators-static-semantics-isanonymousfunctiondefinition": "sec-isanonymousfunctiondefinition",
    "sec-updatepromisefrompotentialthenable": "sec-promise.prototype.then",
    "sec-uri-handling-function": "sec-uri-handling-functions",
    "sec-uri-handling-function-properties": "sec-uri-handling-functions",
    "sec-variable-statement-runtime-semantics-bindinginitialisation": "sec-variable-statement-runtime-semantics-bindinginitialization",
    "sec-web-legacy-compatibility-for-block-level-function-declarations": "sec-block-level-function-declarations-web-legacy-compatibility-semantics",
    "sec-well-known-symbols-and-intrinsics": "sec-well-known-symbols"
};

    var h = document.location.hash;
    if (h && h.charAt(0) == '#' && legacy_sections.hasOwnProperty(h.slice(1)))
        document.location.hash = legacy_sections[h.slice(1)];
});
