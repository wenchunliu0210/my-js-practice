/* ================= new Map() ================= */
const meals = new Map()

meals.set('🍎', 'breakfast')
meals.set('🍕', 'lunch')
meals.set('🍔', 'dinner')
meals.set('🍰', 'dessert')

/**
 * meals:
 * Map(4) {
 *  '🍎' => 'breakfast',
 *  '🍕' => 'lunch',
 *  '🍔' => 'dinner',
 *  '🍰' => 'dessert'
 * }
 */

/* ====================== get() ====================== */
const pizzaTime = meals.get('🍕') // lunch
const donutTime = meals.get('🍩') // undefined

/* ====================== has() ====================== */
const hasPizzaTime = meals.has('🍕') // true
const hasDonutTime = meals.has('🍩') // false

/* ====================== size ====================== */
const mealsCount = meals.size // 4

/* ================= delete() & clear() ================= */
meals.delete('🍔') // return true
meals.delete('🍩') // return false
/**
 * meals:
 * Map(3) {
 *  '🍎' => 'breakfast',
 *  '🍕' => 'lunch',
 *  '🍰' => 'dessert'
 * }
 */

meals.clear() // return undefined
meals.size // 0
/**
 * meals:
 * Map(0) {}
 */
