/* Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

try {
  new BigInt("1")
  assert(false)
} catch (e) {
  assert(e instanceof TypeError)
}

function check_type_error (code)
{
  try {
    eval(code)
    assert(false)
  } catch (e) {
    assert(e instanceof TypeError)
  }
}

check_type_error("+BigInt('0')")

check_type_error("BigInt('1') + 1")
check_type_error("BigInt('2') - 2")
check_type_error("BigInt('3') * 3")
check_type_error("BigInt('4') / 4")
check_type_error("BigInt('5') % 5")
check_type_error("BigInt('6') ** 6")

check_type_error("1 + BigInt('1')")
check_type_error("2 - BigInt('2')")
check_type_error("3 * BigInt('3')")
check_type_error("4 / BigInt('4')")
check_type_error("5 % BigInt('5')")
check_type_error("6 ** BigInt('6')")

check_type_error("BigInt('1') & 1")
check_type_error("BigInt('2') | 2")
check_type_error("BigInt('3') ^ 3")
check_type_error("BigInt('4') << 4")
check_type_error("BigInt('5') >> 5")
check_type_error("BigInt('6') >>> 6")

check_type_error("1 & BigInt('1')")
check_type_error("2 | BigInt('2')")
check_type_error("3 ^ BigInt('3')")
check_type_error("4 << BigInt('4')")
check_type_error("5 >> BigInt('5')")
check_type_error("6 >>> BigInt('6')")
