import {Colors} from "@utils/constants/colors";
import Fonts from "@utils/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    zIndex: 999,
    bottom: -24,
    right: 16,
    left: 16,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.success.light1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toastTitle: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.black,
  },
  labelChartContainer: {
    width: '94%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Colors.primary.base,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  labelChartPointContainer: {
    width: 32,
    height: 32,
    backgroundColor: Colors.white,
    marginRight: 8,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelChartPoint: {
    fontSize: 14,
    fontFamily: Fonts.SemiBoldPoppins,
    color: Colors.primary.base,
  },
  labelChartText: {
    fontSize: 14,
    fontFamily: Fonts.RegularPoppins,
    color: Colors.white,
  },
  notifContainer: {
    paddingHorizontal: 17,
    paddingVertical: 15,
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    width: '90%',
  },
  notifRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notifText: {
    fontFamily: Fonts.SemiBoldPoppins,
    color: Colors.dark.neutral100,
    fontSize: 14,
  },
  answerText: {
    fontSize: 13,
  },
  notifRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  notifRow3: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  notifBase: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.primary.base,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: Colors.white,
  },
  notifKPText: {
    fontSize: 12,
    color: Colors.primary.base,
  },
  notifBarusaja: {
    fontSize: 12,
    color: Colors.dark.neutral80,
  },
});
