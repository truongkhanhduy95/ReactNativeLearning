

export const reducerStackNavigator = (Navigator) => (state, action) => {
    if (action.type.startsWith('Navigation/')) {
        const { type, routeName } = action
        const lastRoute = state.routes[state.routes.length - 1]

        if (routeName === lastRoute.routeName) {
            return state
        }
    }
    return Navigator.router.getStateForAction(action, state)

}