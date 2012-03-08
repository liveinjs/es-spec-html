#!/usr/bin/env python3.2

import docx
import htmodel
from transform import transform
import fixups

def sketch_schema(document):
    def has_own_text(e):
        return e.text or any(k.tail for k in e)

    hits = set()
    def walk(e, path):
        tag = shorten(e.tag)
        path.append(tag)
        hits.add(' > '.join(path))
        if tag != 'pict':
            kpath = path
            if tag in ('r', 'p') or tag.endswith('Pr') or tag.endswith('PrEx'):
                kpath = [tag]
            for kid in e:
                walk(kid, kpath)
        path.pop()

    walk(document, [])

    for path in sorted(hits):
        print(path)

def save_html(docxfile, filename):
    result = transform(docxfile.document)
    fixups.fixup(docxfile, result)

    print("=== Unrecognized styles")
    for k, v in sorted(fixups.unrecognized_styles.items(), key=lambda pair: pair[1]):
        print(k, v)
    print()

    htmodel.save_html(filename, result)

es6_draft = docx.load("es6-draft.docx")
#sketch_schema(es6_draft.document)
#es6_draft._extract()
#es6_draft._dump_styles()
save_html(es6_draft, 'es6-draft.html')

#es51 = docx.load("es5.1-final.dotx")
#save_html(es51, "es5.1-final.html")
