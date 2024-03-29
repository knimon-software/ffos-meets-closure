#!/usr/bin/env python


import os
import toolsconfig


CONFIG = os.path.join('tools', 'tools.cfg')


if __name__ == '__main__':
    basedir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    os.chdir(basedir)

    config = toolsconfig.ToolsConfig()
    config.load(CONFIG)


    devel_dir = config.development_dir()
    js_dev_dir = os.path.join(devel_dir, 'js_dev')
    deps_js = os.path.join(js_dev_dir, 'deps.js')

    base_js_dir = os.path.dirname(config.local_base_js())
    js_dev_dir_rel = os.path.relpath(js_dev_dir, base_js_dir)

    os.system('python %s --root_with_prefix="%s %s" --output_file="%s"' % (config.depswriter(), js_dev_dir, js_dev_dir_rel, deps_js))
