import os
import re

files = [
    r'd:\Learnings\Webpages\Python\src\data\graphs.ts',
    r'd:\Learnings\Webpages\Python\src\data\heaps.ts',
    r'd:\Learnings\Webpages\Python\src\data\tries.ts'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace mutates: True/False and isProblem: True/False
    content = re.sub(r'mutates: True,', 'mutates: true,', content)
    content = re.sub(r'mutates: False,', 'mutates: false,', content)
    content = re.sub(r'isProblem: True,', 'isProblem: true,', content)
    content = re.sub(r'isProblem: False,', 'isProblem: false,', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed True/False in TypeScript files.")
